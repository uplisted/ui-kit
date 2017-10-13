import React from 'react';
import PropTypes from 'prop-types';

const Hr = (props) => {
  const style = {
    backgroundColor: props.color,
    height: props.height,
    margin: 0,
    border: 'none',
  };

  return (
    <hr style={style} />
  );
};

Hr.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
};

Hr.defaultProps = {
  color: '#000000',
  height: 1,
};

export default Hr;
