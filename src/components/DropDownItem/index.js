import React from 'react';
import PropTypes from 'prop-types';
import cs from './index.css';


const DropDownItem = (props) => {
  const onClick = (event) => {
    props.onClick(props.item, event);
  };

  const className = `${cs.root} ${props.isActive ? cs.active : ''}`;

  return (
    <div
      role="presentation"
      onClick={onClick}
      className={className}
    >
      {props.item.label}
    </div>
  );
};

DropDownItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DropDownItem;
