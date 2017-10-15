import React from 'react';
import PropTypes from 'prop-types';

const Background = (props) => {
  const style = {
    backgroundColor: props.color !== '' ? props.color : 'none',
    backgroundImage: props.url !== '' ? `url(${props.url})` : 'none',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: props.fullHeight ? '100%' : 'auto',
  };

  return (
    <div style={style}>
      {props.children}
    </div>
  );
};

Background.propTypes = {
  // Content of component
  children: PropTypes.node.isRequired,

  // Background color
  color: PropTypes.string,

  // Background image url
  url: PropTypes.string,

  // Is container full height
  fullHeight: PropTypes.bool,
};

Background.defaultProps = {
  color: '',
  url: '',
  fullHeight: false,
};

export default Background;
