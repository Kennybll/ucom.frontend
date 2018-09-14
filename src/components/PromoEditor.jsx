import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { PureComponent, Fragment } from 'react';
import classNames from 'classnames';
import PostFormEditor from './PostFormEditor';
import OfferFormEditor from './OfferFormEditor';
import EventTitle from './EventTitle';
import { getFileUrl } from '../utils/upload';
import { setPostData } from '../actions';

const TABS = [{
  id: 1,
  title: 'Media-posts',
}, {
  id: 2,
  title: 'Offers',
}];

class PromoEditor extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTabId: TABS[1].id,
    };
  }

  render() {
    return (
      <div className="promo-editor">
        <div className="promo-editor__title">
          <h1 className="title">Ur ideas and offers valued</h1>
        </div>
        <div className="promo-editor__text">
          Value — your relevance, relations, measured by the community and registered on the blockchain. Your value equals coin emission that you recieve.
        </div>
        <div className="promo-editor__tabs">
          <div className="promo-tabs">
            {TABS.map(item => (
              <div
                key={item.id}
                role="presentation"
                onClick={() => this.setState({ activeTabId: item.id })}
                className={classNames(
                  'promo-tabs__item',
                  { 'promo-tabs__item_active': item.id === this.state.activeTabId },
                )}
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>
        <div className="promo-editor__sub-text">
          Ideas, Knowledge sharing and opinions fuel the world. Share your stories, polls, forecasts,  and get immediate response.
        </div>

        {this.state.activeTabId === 1 ? (
          <div className="promo-editor__editor">
            <PostFormEditor />
          </div>
        ) : (
          <Fragment>
            <div className="promo-editor__event-title">
              <EventTitle
                black
                editableTitle
                editableCover
                rate={9200}
                tags={['sale']}
                title={this.props.post.data.title}
                actionButtonTitle={this.props.post.data.action_button_title || 'Buy now'}
                actionButtonUrl={this.props.post.data.action_button_url}
                actionDurationInDays={this.props.post.data.action_duration_in_days || 10}
                createdAt={(new Date()).getTime()}
                imgSrc={this.state.base64Cover || getFileUrl(this.props.post.data.main_image_filename)}
                team={this.props.post.data.post_users_team}
              />
            </div>
            <div className="promo-editor__editor">
              <OfferFormEditor />
            </div>
          </Fragment>
        )}

        <div className="promo-editor__action">
          <Link className="button button_upper button_theme_red button_size_big button_stretched" to="/signup">Publish</Link>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    post: state.post,
  }),
  dispatch => ({
    setPostData: data => dispatch(setPostData(data)),
  }),
)(PromoEditor);