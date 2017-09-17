import React from 'react';
import PropTypes from 'prop-types';
import cs from './component.pcss';

const Button = (props) => {
  const style = {
    width: props.fullWidth ? '100%' : 150,
  };

  return (
    <div
      className={`${cs.root} ${props.white ? cs.white : cs.default}`}
      style={style}
      onClick={props.onClick}
      role="button"
      tabIndex={0}
    >
      <div className={cs.content}>
        {props.children}
      </div>
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool,
  white: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  fullWidth: false,
  onClick: () => {
    return false;
  },
  white: false,
};

export default Button;
