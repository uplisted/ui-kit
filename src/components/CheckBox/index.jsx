import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import cs from './component.pcss';

const CheckBox = (props) => {
  const className = `${cs.root} ${props.isChecked ? cs.checked : ''}`;
  const iconStyle = {
    display: props.isChecked ? 'block' : 'none',
    position: 'relative',
    left: 3,
    top: 2,
  };

  return (
    <div
      className={className}
      onClick={props.onChange}
      role="checkbox"
      aria-checked={props.isChecked}
      tabIndex={0}
    >
      <div style={iconStyle}>
        <Icon color="white" icon="checked" />
      </div>
    </div>
  );
};

CheckBox.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CheckBox;
