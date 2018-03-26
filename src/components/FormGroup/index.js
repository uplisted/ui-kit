import React from 'react';
import PropTypes from 'prop-types';
import cs from './index.css';

const FormGroup = (props) => {
  const className = `${props.errorText !== '' ? cs.error : ''} ${cs.label}`;

  return (
    <div className={cs.root}>
      <div className={className}>
        {props.errorText !== '' ? props.errorText : props.label}
      </div>
      <div>
        {props.children}
      </div>
    </div>
  );
};

FormGroup.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  errorText: PropTypes.string,
};

FormGroup.defaultProps = {
  errorText: '',
};

export default FormGroup;
