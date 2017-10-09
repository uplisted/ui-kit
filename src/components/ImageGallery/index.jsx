import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import Flex from '../Flex';
import Col from '../Col';
import Icon from '../Icon';
import Padding from '../Padding';
import cs from './component.pcss';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeIndex !== false) {
      this.setState({
        activeIndex: nextProps.activeIndex,
      });
    }
  }

  onSlideLeft() {
    const { activeIndex } = this.state;

    if (activeIndex === 0) {
      return;
    }

    this.setState({
      activeIndex: activeIndex - 1,
    });
  }

  onSlideRight() {
    const { activeIndex } = this.state;

    if (activeIndex === this.props.images.length - 1) {
      return;
    }

    this.setState({
      activeIndex: activeIndex + 1,
    });
  }

  onSlideClick(activeIndex) {
    this.setState({
      activeIndex,
    });
  }

  renderImages() {
    const map = (item, index) => {
      const className = this.state.activeIndex === index ? cs.active : '';
      return (
        <Col xs={{ size: 3 }} key={index}>
          <Padding padding={20}>
            <div
              role="presentation"
              onClick={this.onSlideClick.bind(this, index)}
              className={`${cs.slideItem} ${className}`}
            >
              <img src={item} alt="Slide item" />
            </div>
          </Padding>
        </Col>
      );
    };

    return this.props.images.map(map);
  }

  render() {
    if (!this.props.images.length) {
      return null;
    }

    return (
      <Modal
        onClose={this.props.onClose}
        width={936}
        isOpen={this.props.isOpen}
        overflow="hidden"
        maxHeight={1000}
      >
        <div className={cs.mainImage}>
          <div
            role="button"
            tabIndex={0}
            className={`${cs.arrow} ${cs.left}`}
            onClick={this.onSlideLeft.bind(this)}
          >
            <Icon pointer icon="left-arrow" color="#c3c3c3" fontSize={18} />
          </div>
          <div
            role="button"
            tabIndex={0}
            className={`${cs.arrow} ${cs.right}`}
            onClick={this.onSlideRight.bind(this)}
          >
            <Icon pointer icon="right-arrow" color="#c3c3c3" fontSize={18} />
          </div>
          <img src={this.props.images[this.state.activeIndex]} alt="Main slide" />
        </div>
        <div className={cs.slideContent}>
          <Flex xs={{ wrap: false }}>
            {this.renderImages()}
          </Flex>
        </div>
      </Modal>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeIndex: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImageGallery;
