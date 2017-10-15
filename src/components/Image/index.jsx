import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {
  const style = {
    width: props.width,
  };

  if (props.type === 'rounded') {
    style.borderRadius = 6;
  } else if (props.type === 'circle') {
    style.borderRadius = '50%';
  }

  return (
    <img style={style} src={props.src} alt={props.alt} />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  type: PropTypes.oneOf([
    'rounded',
    'circle',
    '',
  ]),
};

Image.defaultProps = {
  type: '',
};

export default Image;
