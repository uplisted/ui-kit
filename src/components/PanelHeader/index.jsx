import React from 'react';
import PropTypes from 'prop-types';
import cs from './component.pcss';

const Header = (props) => {
  return (
    <div className={cs.root}>
      {props.children}
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
