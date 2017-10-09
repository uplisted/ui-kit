import React from 'react';
import PropTypes from 'prop-types';
import Blurable from '../Blurable';
import Icon from '../Icon';
import Flex from '../Flex';
import Col from '../Col';
import Text from '../Text';
import cs from './component.pcss';

class FilterDropDown extends React.Component {
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

  renderContent() {
    return (
      <div className={cs.content}>
        {this.props.content}
      </div>
    );
  }

  render() {
    const color = this.state.isOpen ? '#7588ff' : '#c9cdd3';

    return (
      <Blurable
        content={this.renderContent()}
        isOpen={this.state.isOpen}
        onToggle={this.onToggle}
        top={10}
      >
        <div className={cs.root}>
          <Flex xs={{ align: 'center' }}>
            <Col xs={{ right: 3 }}>
              <Icon pointer icon={this.props.icon} fontSize={20} color={color} hoverColor={color} />
            </Col>
            <Col xs={{ left: 3 }}>
              <Text fontSize={18} color={color}>{this.props.title}</Text>
            </Col>
            <Col xs={{ left: 12 }}>
              <Icon pointer fontSize={12} icon="down-arrow" color={color} hoverColor={color} />
            </Col>
          </Flex>
        </div>
      </Blurable>
    );
  }
}

FilterDropDown.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default FilterDropDown;
