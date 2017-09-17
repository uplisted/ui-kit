import React from 'react';
import PropTypes from 'prop-types';
import cs from './component.pcss';

const RoundedButton = (props) => {
  return (
    <div className={`${cs.root} ${props.white ? cs.white : cs.default}`}>
      <div className={cs.content}>
        {props.children}
      </div>
    </div>
  );
};

RoundedButton.propTypes = {
  children: PropTypes.node.isRequired,
  white: PropTypes.bool,
};

RoundedButton.defaultProps = {
  white: false,
};

export default RoundedButton;
