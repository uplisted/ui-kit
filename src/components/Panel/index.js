import React from 'react';
import PropTypes from 'prop-types';
import cs from './index.css';

const Panel = props => (
  <div className={cs.root}>
    {props.children}
  </div>
);

Panel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Panel;
