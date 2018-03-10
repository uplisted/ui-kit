import React from 'react';
import PropTypes from 'prop-types';
import cs from './index.css';

const Text = (props) => {
  const style = {
    color: props.color,
    textTransform: props.transform,
    fontSize: props.fontSize,
    fontWeight: props.fontWeight,
    lineHeight: props.lineHeight,
  };

  return (
    <div style={style} className={cs.root}>
      {props.children}
    </div>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  transform: PropTypes.oneOf([
    'uppercase',
    'capitalize',
    'lowercase',
    'none',
  ]),
  fontWeight: PropTypes.string,
  lineHeight: PropTypes.string,
};

Text.defaultProps = {
  color: '#2a2a2a',
  transform: 'none',
  fontSize: 16,
  fontWeight: 'normal',
  lineHeight: 'normal',
};

export default Text;
