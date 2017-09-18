import React from 'react';
import PropTypes from 'prop-types';

const Padding = (props) => {
  const style = {
    paddingTop: props.padding.top || 0,
    paddingRight: props.padding.right || 0,
    paddingBottom: props.padding.bottom || 0,
    paddingLeft: props.padding.left || 0,
  };

  return (
    <div style={style}>
      {props.children}
    </div>
  );
};

Padding.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
  }).isRequired,
};

export default Padding;
