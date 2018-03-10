import React from 'react';
import PropTypes from 'prop-types';
import cs from './index.css';

const Heading = (props) => {
  const style = {
    color: props.color,
    textTransform: props.transform,
    fontWeight: props.fontWeight,
    lineHeight: props.lineHeight,
    fontSize: 26,
  };

  return (
    <h1 style={style} className={cs.root}>
      {props.children}
    </h1>
  );
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  transform: PropTypes.oneOf([
    'uppercase',
    'capitalize',
    'lowercase',
    'none',
  ]),
  fontWeight: PropTypes.string,
  lineHeight: PropTypes.string,
};

Heading.defaultProps = {
  color: '#2a2a2a',
  transform: 'none',
  fontWeight: 'normal',
  lineHeight: 'normal',
};

export default Heading;
