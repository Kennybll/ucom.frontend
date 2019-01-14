import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Fragment, useState } from 'react';
import TextareaAutosize from '../TextareaAutosize';
import Button from '../Button';
import { setDataToStoreToLS } from '../../actions';
import { UPLOAD_SIZE_LIMIT, UPLOAD_SIZE_LIMIT_ERROR } from '../../utils/upload';
import { addErrorNotification } from '../../actions/notifications';
import api from '../../api';
import loader from '../../utils/loader';
import { POSTS_TITLE_MAX_LENGTH, POSTS_LEADING_TEXT_MAX_LENGTH } from '../../utils/posts';

const PostSubmitForm = (props) => {
  const entityImages = props.post.data.entityImages || {};
  const [loading, setLoading] = useState(false);

  return (
    <div className="post-submit-form">
      <div className="post-submit-form__title">
        <h3 className="title title_small">Post preview</h3>
      </div>

      <div className="post-submit-form__text">
        <div className="text text_small">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat eligendi reprehenderit ad sint minima dolores sit cupiditate itaque incidunt. Earum.</p>
        </div>
      </div>

      <div className="post-submit-cover">
        <label className="post-submit-cover__inner">
          {entityImages.articleTitle && entityImages.articleTitle[0] ? (
            <Fragment>
              <img className="post-submit-cover__img" src={entityImages.articleTitle[0].url} alt="" />
              <div className="post-submit-cover__change">Click for change preview image</div>
            </Fragment>
          ) : (
            <div className="post-submit-cover__text">Click for upload preview image</div>
          )}

          <input
            type="file"
            onChange={async (e) => {
              const file = e.target.files[0];

              if (!file || !file.type.indexOf('image/') === 0) {
                return;
              }

              if (file.size > UPLOAD_SIZE_LIMIT) {
                props.addErrorNotification(UPLOAD_SIZE_LIMIT_ERROR);
                return;
              }

              loader.start();
              setLoading(true);

              try {
                const data = await api.uploadPostImage(file);
                entityImages.articleTitle = [{ url: data.files[0].url }];
                props.setDataToStoreToLS({ entityImages });
              } catch (e) {
                console.error(e);
              }

              loader.done();
              setLoading(false);
            }}
          />
        </label>
      </div>

      <div className="post-submit-form__field">
        <TextareaAutosize
          rows="1"
          maxLength={POSTS_TITLE_MAX_LENGTH}
          placeholder="Preview title"
          className="post-submit-form__data post-submit-form__data_title"
          value={props.post.data.title}
          onChange={e => props.setDataToStoreToLS({ title: e.target.value })}
        />
      </div>

      <div className="post-submit-form__field">
        <TextareaAutosize
          rows="1"
          maxLength={POSTS_LEADING_TEXT_MAX_LENGTH}
          placeholder="Preview sub title"
          className="post-submit-form__data post-submit-form__data_lead"
          value={props.post.data.leadingText}
          onChange={e => props.setDataToStoreToLS({ leadingText: e.target.value })}
        />
      </div>

      <div className="post-submit-form__action">
        <Button
          theme="red"
          size="small"
          text="Publish"
          isDisabled={!props.post.isValid || loading}
          onClick={() => props.onSubmit && props.onSubmit()}
        />
      </div>
    </div>
  );
};

export default connect(
  state => ({
    post: state.post,
  }),
  dispatch => bindActionCreators({
    setDataToStoreToLS,
    addErrorNotification,
  }, dispatch),
)(PostSubmitForm);