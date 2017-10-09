import React from 'react';
import PropTypes from 'prop-types';
import cs from './component.pcss';

class Icon extends React.Component {
  constructor() {
    super();

    this.state = {
      hovered: false,
    };
  }

  onMouseEnter() {
    this.setState({
      hovered: true,
    });
  }

  onMouseLeave() {
    this.setState({
      hovered: false,
    });
  }

  render() {
    const style = {
      fontSize: this.props.fontSize,
      color: this.state.hovered ? (this.props.hoverColor || this.props.color) : this.props.color,
      cursor: this.props.pointer ? 'pointer' : 'default',
      lineHeight: 1,
    };
    const className = `${cs.root} ${cs[`icon-${this.props.icon}`]}`;

    return (
      <i
        onMouseEnter={this.onMouseEnter.bind(this)}
        onMouseLeave={this.onMouseLeave.bind(this)}
        style={style}
        className={className}
      />
    );
  }
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  pointer: PropTypes.bool,
};

Icon.defaultProps = {
  pointer: false,
  fontSize: 16,
  color: '#000000',
  hoverColor: null,
};

export default Icon;
