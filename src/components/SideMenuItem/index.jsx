import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import cs from './component.pcss';
import Flex from '../Flex';
import Col from '../Col';
import Icon from '../Icon';

const MenuItem = (props) => {
  const unSeenItemsContainer = props.unSeenItems !== 0 ? (
    <Col margin={{ left: 10 }}>
      <div className={cs.unSeenItemsContainer}>
        <div>
          {props.unSeenItems}
        </div>
      </div>
    </Col>
  ) : null;

  return (
    <div className={cs.root}>
      <NavLink exact to={props.href} activeClassName={cs.active}>
        <Flex xs={{ align: 'center', height: '100%' }}>
          <Col xs={{ left: 14 }}>
            <Icon icon={props.icon} color="#7178ff" />
          </Col>
          <Col xs={{ left: 28 }}>
            {props.children}
          </Col>
          {unSeenItemsContainer}
        </Flex>
      </NavLink>
    </div>
  );
};

MenuItem.propTypes = {
  // Item title
  children: PropTypes.node.isRequired,

  // URL
  href: PropTypes.string.isRequired,

  // Icon name
  icon: PropTypes.string.isRequired,

  // How many unseen items
  unSeenItems: PropTypes.number,
};

MenuItem.defaultProps = {
  unSeenItems: 0,
};

export default MenuItem;
