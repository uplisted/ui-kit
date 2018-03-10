import React from 'react';
import PropTypes from 'prop-types';
import { getViewPortConfig, getColumnStyles } from '../../utils';

class Col extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      style: {},
      viewPortConfig: {},
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
    const {
      xl, lg, md, sm, xs,
    } = this.props;

    if (
      !xl && !lg && !md && !sm && !xs
    ) {
      return;
    }

    const viewPortConfig = getViewPortConfig(window.innerWidth, {
      xl, lg, md, sm, xs,
    });

    this.setState({
      viewPortConfig,
      style: getColumnStyles(viewPortConfig),
    });
  }

  render() {
    const wrapperStyle = {
      paddingLeft: this.state.viewPortConfig.left || 0,
      paddingRight: this.state.viewPortConfig.right || 0,
      paddingTop: this.state.viewPortConfig.top || 0,
      paddingBottom: this.state.viewPortConfig.bottom || 0,
    };

    return (
      <div style={this.state.style}>
        <div style={wrapperStyle}>
          { this.props.children }
        </div>
      </div>
    );
  }
}

const shape = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.shape({
    size: PropTypes.number,
    offset: PropTypes.number,
    top: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
  }),
]);

Col.propTypes = {
  xl: shape,
  lg: shape,
  md: shape,
  sm: shape,
  xs: shape,
  children: PropTypes.node.isRequired,
};

Col.defaultProps = {
  xl: null,
  lg: null,
  md: null,
  sm: null,
  xs: null,
};

export default Col;
