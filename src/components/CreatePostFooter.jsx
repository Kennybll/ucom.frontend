import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import Avatar from './Avatar';
import { getUserName } from '../utils/user';
import { getFileUrl } from '../utils/upload';

const CreatePostFooter = props => (
  <div className="create-post__content create-post__content_footer">
    <div className="toolbar">
      <div className="toolbar__main">
        <a href="#post" className="create-post__back-link">Back to settings ↑</a>
      </div>
      <div className="toolbar__side">
        <div className="inline">
          <div className="inline__item">
            <Avatar size="xsmall" src={getFileUrl(props.user.avatar_filename)} />
          </div>
          <span className="inline__item">
            <span className="create-post__author-name">{getUserName(props.user)}</span>
          </span>
          <span className="inline__item">
            <button
              className="button button_theme_red button_size_small button_stretched button_capitalized"
              onClick={() => {
                if (typeof props.onClickPost === 'function') {
                  props.onClickPost();
                }
              }}
            >
              Post
            </button>
          </span>
        </div>
      </div>
    </div>
  </div>
);

CreatePostFooter.propTypes = {
  onClickPost: PropTypes.func,
};

export default connect(state => ({
  user: state.user,
}), null)(CreatePostFooter);
