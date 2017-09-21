import React from 'react';
import PropTypes from 'prop-types';
import { getViewPortConfig, getRowStyles } from '../../utils';
import cs from './component.pcss';

class Flex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      style: {},
    };

    this.resize = this.resize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);

    // Initial resize call
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize() {
    const viewPortConfig = getViewPortConfig(window.innerWidth, {
      xl: this.props.xl,
      lg: this.props.lg,
      md: this.props.md,
      sm: this.props.sm,
      xs: this.props.xs,
    });

    this.setState({
      style: getRowStyles(viewPortConfig),
    });
  }

  render() {
    return (
      <div className={cs.root} style={this.state.style}>
        { this.props.children }
      </div>
    );
  }
}

const shape = PropTypes.shape({
  align: PropTypes.string,
  justify: PropTypes.string,
  wrap: PropTypes.string,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
});

Flex.propTypes = {
  xl: shape,
  lg: shape,
  md: shape,
  sm: shape,
  xs: shape,
  children: PropTypes.node.isRequired,
};

Flex.defaultProps = {
  xl: null,
  lg: null,
  md: null,
  sm: null,
  xs: null,
};

export default Flex;
