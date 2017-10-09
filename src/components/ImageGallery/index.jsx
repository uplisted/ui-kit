import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import Flex from '../Flex';
import Icon from '../Icon';
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
        <div role="presentation" onClick={this.onSlideClick.bind(this, index)} key={index} className={`${cs.slideItem} ${className}`}>
          <img src={item} alt="Slide item" />
        </div>
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
        width={700}
        isOpen={this.props.isOpen}
        overflow="hidden"
        maxHeight={1200}
      >
        <div className={cs.mainImage}>
          <div
            role="button"
            tabIndex={0}
            className={`${cs.arrow} ${cs.left}`}
            onClick={this.onSlideLeft.bind(this)}
          >
            <Icon icon="left-arrow" color="#c3c3c3" fontSize={18} />
          </div>
          <div
            role="button"
            tabIndex={0}
            className={`${cs.arrow} ${cs.right}`}
            onClick={this.onSlideRight.bind(this)}
          >
            <Icon icon="right-arrow" color="#c3c3c3" fontSize={18} />
          </div>
          <img src={this.props.images[this.state.activeIndex]} alt="Main slide" />
        </div>
        <div className={cs.slideContent}>
          <Flex>
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
