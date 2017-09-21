import React from 'react';
import PropTypes from 'prop-types';

const FixedAppContent = (props) => {
  const style = {
    maxWidth: 1350,
    minWidth: 1024,
    margin: '0 auto',
    paddingBottom: 30,
  };

  return (
    <div style={style}>
      {props.children}
    </div>
  );
};

FixedAppContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FixedAppContent;
