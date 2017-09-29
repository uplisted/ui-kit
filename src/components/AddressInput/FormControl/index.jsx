import React from 'react';
import PropTypes from 'prop-types';
import cs from './component.pcss';

/**
 * @class FormControl
 * @classdesc Simple user input element.
 */


const FormControl = (props) => {
  return (
    <input
      className={cs.root}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

FormControl.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

FormControl.defaultProps = {
  placeholder: '',
};

export default FormControl;
