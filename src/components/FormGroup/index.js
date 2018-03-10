import React from 'react';
import PropTypes from 'prop-types';
import cs from './index.css';

const FormGroup = props => (
  <div className={cs.root}>
    <div className={cs.label}>
      {props.label}
    </div>
    <div>
      {props.children}
    </div>
  </div>
);

FormGroup.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FormGroup;
