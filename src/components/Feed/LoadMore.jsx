import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { throttle } from 'lodash';
import React, { PureComponent } from 'react';

class LoadMore extends PureComponent {
  constructor(props) {
    super(props);

    this.onScroll = throttle(() => {
      if (!this.el) {
        return;
      }

      const rect = this.el.getBoundingClientRect();

      if (rect.top - window.innerHeight > 400) {
        return;
      }

      if (typeof this.props.onClick === 'function') {
        this.props.onClick();
      }
    }, 100);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  render() {
    const ButtonTag = this.props.url ? Link : 'button';

    return (
      <div ref={(el) => { this.el = el; }}>
        <ButtonTag
          to={this.props.url}
          className={classNames(
            'button',
            'button_theme_thin',
            'button_size_medium',
            'button_stretched',
            { 'button_disabled': this.props.disabled },
          )}
          disabled={this.props.disabled}
          onClick={() => {
            if (typeof this.props.onClick === 'function') {
              this.props.onClick();
            }
          }}
        >
          Load more
        </ButtonTag>
      </div>
    );
  }
}

LoadMore.propTypes = {
  onClick: PropTypes.func,
};

export default connect(state => ({
  feeds: state.feeds,
}))(LoadMore);
