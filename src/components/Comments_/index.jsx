import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styles from './styles.css';
import Comment from './Comment';
import Form from './Form';
import ShowNext from './ShowNext';

const Comments = (props) => {
  const [timestamp] = useState((new Date()).getTime());
  const newOwnerComments = props.comments
    .filter(i => i.userId === props.ownerId && (new Date(i.createdAt)).getTime() > timestamp);
  const comments = props.comments.filter(i => newOwnerComments.every(j => j.id !== i.id));

  return (
    <div className={styles.comments}>
      <div className={styles.list}>
        {comments.map(comment => (
          <Comment
            key={comment.id}
            postId={props.postId}
            id={comment.id}
            depth={comment.depth}
            text={comment.text}
            date={comment.date}
            userId={comment.userId}
            replys={comment.replys}
            nextDepthTotalAmount={comment.nextDepthTotalAmount}
            metadata={props.metadata}
            ownerId={props.ownerId}
            ownerImageUrl={props.ownerImageUrl}
            ownerPageUrl={props.ownerPageUrl}
            ownerName={props.ownerName}
            onSubmit={props.onSubmit}
            onClickShowReplies={props.onClickShowReplies}
          />
        ))}

        {props.metadata[0] && props.metadata[0].hasMore &&
          <ShowNext
            postId={props.postId}
            perPage={props.metadata[0].perPage}
            page={props.metadata[0].page}
            onClick={props.onClickShowNext}
          />
        }

        {newOwnerComments.map(comment => (
          <Comment
            key={comment.id}
            postId={props.postId}
            id={comment.id}
            depth={comment.depth}
            text={comment.text}
            date={comment.date}
            userId={comment.userId}
            replys={comment.replys}
            nextDepthTotalAmount={comment.nextDepthTotalAmount}
            metadata={props.metadata}
            ownerId={props.ownerId}
            ownerImageUrl={props.ownerImageUrl}
            ownerPageUrl={props.ownerPageUrl}
            ownerName={props.ownerName}
            onSubmit={props.onSubmit}
            onClickShowReplies={props.onClickShowReplies}
          />
        ))}

        <Form
          postId={props.postId}
          userImageUrl={props.ownerImageUrl}
          userPageUrl={props.ownerPageUrl}
          userName={props.ownerName}
          onSubmit={props.onSubmit}
        />
      </div>
    </div>
  );
};

Comments.propTypes = {
  postId: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    depth: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
    parentId: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
  })),
  metadata: PropTypes.objectOf(PropTypes.shape({
    hasMore: PropTypes.bool,
    page: PropTypes.number,
    perPage: PropTypes.number,
  })),
  ownerId: PropTypes.number,
  ownerImageUrl: PropTypes.string,
  ownerPageUrl: PropTypes.string,
  ownerName: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onClickShowNext: PropTypes.func.isRequired,
  onClickShowReplies: PropTypes.func.isRequired,
};

Comments.defaultProps = {
  comments: [],
  metadata: {},
  ownerId: null,
  ownerImageUrl: null,
  ownerPageUrl: null,
  ownerName: null,
};

export default Comments;
