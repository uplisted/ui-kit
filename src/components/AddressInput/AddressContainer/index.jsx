import React from 'react';
import PropTypes from 'prop-types';
import cs from './component.pcss';

const AddressContainer = (props) => {
  const className = props.isHidden ?
    `${cs.root} ${cs.hidden}` :
    cs.root;


  return (
    <div className={className} >
      { props.children }
    </div>
  );
};

AddressContainer.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default AddressContainer;
