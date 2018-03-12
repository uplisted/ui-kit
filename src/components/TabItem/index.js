import React from 'react';
import PropTypes from 'prop-types';
import cs from './index.css';

const TabItem = (props) => {
  const activeClassName = props.isActive ? cs.active : '';

  return (
    <div role="link" tabIndex={0} className={`${cs.root} ${activeClassName}`} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

TabItem.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default TabItem;
