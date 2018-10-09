import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from 'react';
import Comment from './Comment';
import { getCommentById } from '../../store/comments';
import { createComment } from '../../actions/comments';

const CommentsList = (props) => {
  const comments = props.commentsIds.map(id => getCommentById(props.comments, id));

  if (!comments.length) {
    return null;
  }

  return (
    <div className="comments-list">
      {comments.map(item => (
        <Comment
          key={item.id}
          id={item.id}
          onSubmit={(description) => {
            props.createComment({
              postId: props.postId,
              commentId: item.id,
              data: { description },
            });
          }}
        />
      ))}
    </div>
  );
};

CommentsList.propTypes = {
  postId: PropTypes.number,
  commentsIds: PropTypes.arrayOf(PropTypes.number),
  comments: PropTypes.objectOf(PropTypes.object),
  createComment: PropTypes.func,
};

CommentsList.defaultProps = {
  commentsIds: [],
};

export default connect(
  state => ({
    comments: state.comments,
  }),
  dispatch => bindActionCreators({
    createComment,
  }, dispatch),
)(CommentsList);
