import React from 'react';
import PropTypes from 'prop-types';
import cs from './component.pcss';

const Icon = (props) => {
  const style = {
    fontSize: props.fontSize,
    color: props.color,
    cursor: props.pointer ? 'pointer' : 'default',
    lineHeight: 1,
  };
  const className = `${cs.root} ${cs[`icon-${props.icon}`]}`;

  return (
    <i style={style} className={className} />
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
  color: PropTypes.string,
  pointer: PropTypes.bool,
};

Icon.defaultProps = {
  pointer: false,
  fontSize: 16,
  color: '#000000',
};

export default Icon;
