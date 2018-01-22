import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../Flex';
import Col from '../Col';
import Padding from '../Padding';
import CheckBox from '../CheckBox';
import cs from './component.pcss';

const PhotoSelector = (props) => {
  const onToggle = (url) => {
    props.onToggle(url);
  };

  const map = (selected, item, index) => {
    const isSelected = selected.indexOf(item) !== -1;
    const className = isSelected ? cs.active : '';

    return (
      <Col key={index}>
        <Padding padding={12}>
          <div
            role="presentation"
            onClick={onToggle.bind(this, item)}
            className={`${cs.slideItem} ${className}`}
          >
            <div className={cs.checkBox}>
              <CheckBox isChecked={isSelected} onChange={() => {}} />
            </div>
            <img src={item} alt="Slide item" />
          </div>
        </Padding>
      </Col>
    );
  };


  return (
    <div className={cs.root}>
      <div>
        <Flex xs={{ wrap: 'no-wrap' }}>
          {props.photos.map(map.bind(this, props.selected))}
        </Flex>
      </div>
    </div>
  );
};

PhotoSelector.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default PhotoSelector;
