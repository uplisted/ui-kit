import React from 'react';
import PropTypes from 'prop-types';

const Content = (props) => {
  const style = {
    backgroundColor: 'white',
    boxSizing: 'border-box',
  };

  if (props.isPadded) {
    style.padding = '20px 30px';
  }

  return (
    <div style={style}>
      {props.children}
    </div>
  );
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
  isPadded: PropTypes.bool,
};

Content.defaultProps = {
  isPadded: true,
};

export default Content;
