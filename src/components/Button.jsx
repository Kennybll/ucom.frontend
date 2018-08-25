import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = (props) => {
  const btnClass = classNames('button', {
    [`button_theme_${props.theme}`]: Boolean(props.theme),
    [`button_size_${props.size}`]: true,
    button_disabled: props.isDisabled,
    button_stretched: props.isStretched,
    button_rounded: props.isRounded,
  });

  return (
    <button disabled={props.isDisabled} className={btnClass}>
      {props.text}
    </button>
  );
};

export const ButtonType = {
  theme: PropTypes.string,
  size: PropTypes.string,
  isDisabled: PropTypes.bool,
  isStretched: PropTypes.bool,
  isRounded: PropTypes.bool,
  text: PropTypes.string,
};

Button.propTypes = ButtonType;

Button.defaultProps = {
  isDisabled: false,
  text: '',
};

export default Button;
