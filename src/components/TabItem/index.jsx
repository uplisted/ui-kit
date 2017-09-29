import React from 'react';
import PropTypes from 'prop-types';
import cs from './component.pcss';
import Flex from '../Flex';

const TabItem = (props) => {
  const activeClassName = props.isActive ? cs.active : '';

  return (
    <div className={`${cs.root} ${activeClassName}`}>
      <Flex xs={{ align: 'center', justify: 'center', height: '100%' }}>
        {props.children}
      </Flex>
    </div>
  );
};

TabItem.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default TabItem;
