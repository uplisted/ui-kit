import React from 'react';
import PropTypes from 'prop-types';
import cs from './component.pcss';

const Panel = (props) => {
  return (
    <div className={cs.root}>
      {props.children}
    </div>
  );
};

Panel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Panel;
