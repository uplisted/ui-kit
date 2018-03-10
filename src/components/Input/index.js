import React from 'react';
import PropTypes from 'prop-types';
import cs from './index.css';

const Input = (props) => {
  const borderClassName = props.bordered ? cs.fullBordered : cs.bottomBordered;

  return (
    <input
      className={`${cs.root} ${borderClassName}`}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      type={props.type}
      readOnly={props.readonly}
    />
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  bordered: PropTypes.bool,
  readonly: PropTypes.bool,
};

Input.defaultProps = {
  placeholder: '',
  bordered: true,
  type: 'text',
  onChange: () => false,
  readonly: false,
};

export default Input;
