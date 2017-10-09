import React from 'react';
import PropTypes from 'prop-types';
import cs from './component.pcss';

const ListItem = (props) => {
  return (
    <li className={cs.root} style={{ color: props.color }}>
      {props.children}
    </li>
  );
};

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
  color: '#8f959f',
};

export default ListItem;
