import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import api from '../../api';
import loader from '../../utils/loader';
import { addPosts } from '../../actions/posts';
import LoadMore from './LoadMore';
import Post from './Post/Post';
import {
  POSTS_CATREGORIES_HOT_ID,
  POSTS_CATREGORIES_TRENDING_ID,
  POSTS_CATREGORIES_FRESH_ID,
  POSTS_CATREGORIES_TOP_ID,
  POST_TYPE_MEDIA_ID,
} from '../../utils/posts';

const paramsForCategories = {
  [POSTS_CATREGORIES_HOT_ID]: {
    sortBy: '-current_rate',
    createdAt: '24_hours',
  },
  [POSTS_CATREGORIES_TRENDING_ID]: {
    sortBy: '-current_rate_delta_daily',
  },
  [POSTS_CATREGORIES_FRESH_ID]: {
    sortBy: '-id',
  },
  [POSTS_CATREGORIES_TOP_ID]: {
    sortBy: '-current_rate',
  },
};

const FeedCategories = (props) => {
  const [postIds, setPostIds] = useState([]);
  const [metadata, setMetadata] = useState({ page: 1, perPage: 20 });
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

  const fetchPosts = async (params) => {
    loader.start();
    setLoading(true);

    try {
      const data = await api.getPosts({
        ...params,
        ...paramsForCategories[props.categoryId],
        postTypeId: POST_TYPE_MEDIA_ID,
      });
      props.addPosts(data.data);
      setMetadata(data.metadata);
      setPostIds(postIds.concat(data.data.map(i => i.id)));
      props.onOrgsAdd(data.data.map(i => i.organizationId));
      props.onUsersAdd(data.data.map(i => i.userId));
    } catch (e) {
      console.error(e);
    }

    loader.done();
    setLoading(false);
    setLoaded(true);
  };

  useEffect(() => {
    fetchPosts({
      page: metadata.page,
      perPage: metadata.perPage,
    });
  }, []);

  if (!loaded) {
    return null;
  }

  if (loaded && !postIds.length) {
    return (
      <div className="feed">
        <div className="feed__empty">
          <div className="text">No posts to display</div>
        </div>
      </div>
    );
  }

  return (
    <div className="feed">
      <div className="feed__list">
        {postIds.map(id => (
          <div className="feed__item" key={id}>
            <Post id={id} />
          </div>
        ))}
      </div>
      {metadata.hasMore &&
        <div className="feed__loadmore">
          <LoadMore
            disabled={loading}
            onClick={() => {
              if (loading) return;

              fetchPosts({
                page: metadata.page + 1,
                perPage: metadata.perPage,
              });
            }}
          />
        </div>
      }
    </div>
  );
};

export default connect(
  null,
  dispatch => bindActionCreators({
    addPosts,
  }, dispatch),
)(FeedCategories);
