import humps from 'lodash-humps';
import api from '../api';
import { addUsers } from './users';
import { addOrganizations } from './organizations';
import { UPVOTE_STATUS, DOWNVOTE_STATUS } from '../utils/posts';
import { addServerErrorNotification } from './notifications';
import { addComments } from './comments';
import snakes from '../utils/snakes';
import loader from '../utils/loader';

export const setPostVote = payload => ({ type: 'SET_POST_VOTE', payload });
export const setPostCommentCount = payload => ({ type: 'SET_POST_COMMENT_COUNT', payload });

export const addPosts = (postsData = []) => (dispatch) => {
  const posts = [];
  const users = [];
  const organizations = [];
  let comments = [];

  const parsePost = (post) => {
    if (post.comments && post.comments.data) {
      comments = comments.concat(post.comments.data);
      post.comments.data = post.comments.data.map(i => i.id);
    }

    if (post.comments && post.comments.metadata) {
      post.comments.metadata = {
        0: post.comments.metadata,
      };
    }

    if (post.user) {
      users.push(post.user);
    }

    if (post.organization) {
      organizations.push(post.organization);
    }

    if (post.post) {
      parsePost(post.post);
    }

    posts.push(post);
  };

  postsData.forEach(parsePost);
  dispatch(addUsers(users));
  dispatch(addOrganizations(organizations));
  dispatch(addComments(comments));
  dispatch({ type: 'ADD_POSTS', payload: posts });
};

export const postsAddComments = ({
  postId,
  parentId,
  data,
  metadata,
}) => (dispatch) => {
  dispatch(addComments(data));
  dispatch({
    type: 'POSTS_ADD_COMMENTS',
    payload: {
      postId,
      parentId,
      metadata,
      data: data.map(i => i.id),
    },
  });
};

export const postsAddSingleComment = ({ postId, commentId }) =>
  ({ type: 'POSTS_ADD_SINGLE_COMMENT', payload: { postId, commentId } });

export const fetchPost = postId => dispatch =>
  api.getPost(postId)
    .then((data) => {
      dispatch(addComments(humps(data.comments)));
      dispatch(addPosts([data]));

      return data;
    });

export const updatePost = payload => (dispatch) => {
  loader.start();
  api.updatePost(snakes(payload.data), payload.postId)
    .then((data) => {
      dispatch(addPosts([data]));
    })
    .catch((error) => {
      dispatch(addServerErrorNotification(error));
    })
    .then(() => loader.done());
};

export const addRepost = postId => (dispatch) => {
  loader.start();
  api.repostPost(postId)
    .catch((error) => {
      dispatch(addServerErrorNotification(error));
    })
    .then(() => loader.done());
};

export const postVote = payload => (dispatch) => {
  loader.start();
  api.vote(payload.isUp, payload.postId)
    .then(humps)
    .then((data) => {
      dispatch(setPostVote({
        id: payload.postId,
        currentVote: data.currentVote,
        myselfVote: payload.isUp ? UPVOTE_STATUS : DOWNVOTE_STATUS,
      }));
    })
    .catch((error) => {
      dispatch(addServerErrorNotification(error));
    })
    .then(() => loader.done());
};
