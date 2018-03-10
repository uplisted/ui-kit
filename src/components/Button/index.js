import React from 'react';
import PropTypes from 'prop-types';
import cs from './index.css';

const Button = (props) => {
  const style = {
    width: props.fullWidth ? '100%' : 150,
  };

  return (
    <button
      className={`${cs.root} ${cs[props.type]}`}
      style={style}
      onClick={props.onClick}
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
};

Button.defaultProps = {
  fullWidth: false,
  onClick: () => false,
  type: 'default',
  formType: 'button',
};

export default Button;
