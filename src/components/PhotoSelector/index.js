import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Flex from '../Flex';
import Col from '../Col';
import CheckBox from '../CheckBox';
import Padding from '../Padding';
import cs from './index.css';

const Item = (props) => {
  const className = props.isSelected ? cs.active : '';

  return (
    <div role="presentation" onClick={props.onToggle(props.item)} className={`${cs.slideItem} ${className}`}>
      <div className={cs.checkBox}>
        <CheckBox isChecked={props.isSelected} onChange={() => false} />
      </div>
      <img src={props.item} alt="Slide item" />
    </div>
  );
};

Item.propTypes = {
  onToggle: PropTypes.func.isRequired,
  item: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
};


class PhotoSelector extends Component {
  renderItems() {
    const map = (item, index) => {
      const isSelected = this.props.selected.indexOf(item) !== -1;
      return (
        <Col key={index}>
          <Padding padding={12}>
            <Item item={item} isSelected={isSelected} onToggle={this.props.onToggle} />
          </Padding>
        </Col>
      );
    };

    return this.props.photos.map(map);
  }

  render() {
    return (
      <div className={cs.root}>
        <div>
          <Flex xs={{ wrap: 'no-wrap' }}>
            {this.renderItems()}
          </Flex>
        </div>
      </div>
    );
  }
}

PhotoSelector.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default PhotoSelector;
