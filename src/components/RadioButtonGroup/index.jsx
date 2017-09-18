import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../Flex';
import Col from '../Col';
import cs from './component.pcss';

const renderOptions = (options, value, onChange) => {
  const map = (item, index) => {
    const gridSize = 12 / options.length;
    const className = `${cs.button} ${value === item.value ? cs.active : ''}`;

    return (
      <Col xs={gridSize} key={index}>
        <div
          role="button"
          tabIndex={0}
          onClick={onChange.bind(this, item.value)}
          className={className}
        >
          {item.label}
        </div>
      </Col>
    );
  };

  return options.map(map);
};

const RadioButtonGroup = (props) => {
  const onChange = (value) => {
    props.onChange(value);
  };

  return (
    <div className={cs.root}>
      <Flex xs={{ align: 'center' }}>
        {renderOptions(props.options, props.value, onChange)}
      </Flex>
    </div>
  );
};

RadioButtonGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioButtonGroup;
