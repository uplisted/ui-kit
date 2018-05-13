import React from 'react';
import PropTypes from 'prop-types';
import Blurable from '../Blurable';
import Flex from '../Flex';
import Col from '../Col';
import Text from '../Text';
import DropDownItem from '../DropDownItem';
import cs from './index.css';

class DropDownMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.onToggle = this.onToggle.bind(this);
  }

  onToggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  onChange(item) {
    this.onToggle();
    this.props.onChange(item);
  }

  renderItems() {
    const map = (item, index) => (
      <DropDownItem
        key={index}
        item={item}
        onClick={this.onChange.bind(this)}
        isActive={item.label === this.props.active.label}
      />
    );

    return this.props.items.map(map);
  }

  renderContent() {
    return (
      <div className={cs.content}>
        {this.renderItems()}
      </div>
    );
  }

  render() {
    const color = this.state.isOpen ? '#7588ff' : '#2a2a2a';

    return (
      <Blurable
        content={this.renderContent()}
        isOpen={this.state.isOpen}
        onToggle={this.onToggle}
        top={10}
      >
        <div className={cs.root}>
          <Flex xs={{ align: 'center' }}>
            <Col xs={{ left: 3 }}>
              <Text fontSize={18} color={color}>{this.props.placeholder}:</Text>
            </Col>
            <Col xs={{ left: 3 }}>
              <Text
                fontSize={18}
                color={color}
              >
                {this.props.active.label}
              </Text>
            </Col>
            <Col xs={{ left: 12 }}>
              <i className={cs.downArrow} />
            </Col>
          </Flex>
        </div>
      </Blurable>
    );
  }
}

DropDownMenu.propTypes = {
  placeholder: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
  })).isRequired,
  active: PropTypes.shape({
    label: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DropDownMenu;
