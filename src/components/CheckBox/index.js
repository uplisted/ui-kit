import React from 'react';
import PropTypes from 'prop-types';
import cs from './index.css';

const CheckBox = (props) => {
  const className = `${cs.root} ${props.isChecked ? cs.checked : ''}`;

  return (
    <div
      className={className}
      onClick={props.onChange}
      role="checkbox"
      aria-checked={props.isChecked}
      tabIndex={0}
    >
      <div className={cs.checkmark} />
    </div>
  );
};

CheckBox.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CheckBox;
