import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import cs from './component.pcss';

const NavTabItem = (props) => {
  return (
    <NavLink exact className={cs.root} activeClassName={cs.active} to={props.href}>
      {props.children}
    </NavLink>
  );
};

NavTabItem.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export default NavTabItem;
