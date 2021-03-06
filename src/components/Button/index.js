import React from 'react';
import PropTypes from 'prop-types';
import cs from './index.css';

const Button = (props) => {
  const style = {
    width: props.fullWidth ? '100%' : 150,
  };

  const onClick = (event) => {
    if (!props.submitting) {
      props.onClick(event);
    }
  };

  const submittingClass = props.submitting ? cs.submitting : '';

  return (
    <button
      className={`${cs.root} ${cs[props.type]} ${submittingClass}`}
      style={style}
      onClick={onClick}
      type={props.formType}
    >
      <div className={cs.content}>
        {props.children}
      </div>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf([
    'default',
    'white',
    'transparent',
    'facebook',
  ]),
  formType: PropTypes.oneOf([
    'button',
    'submit',
  ]),
  submitting: PropTypes.bool,
};

Button.defaultProps = {
  fullWidth: false,
  onClick: () => false,
  type: 'default',
  formType: 'button',
  submitting: false,
};

export default Button;
