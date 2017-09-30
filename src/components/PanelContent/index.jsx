import React from 'react';
import PropTypes from 'prop-types';

const Content = (props) => {
  const style = {
    backgroundColor: 'white',
    padding: '20px 30px',
    boxSizing: 'border-box',
  };

  return (
    <div style={style}>
      {props.children}
    </div>
  );
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
