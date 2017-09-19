import React from 'react';
import PropTypes from 'prop-types';
import cs from './component.pcss';

class Blurable extends React.Component {
  render() {
    const style = {
      display: this.props.isOpen ? 'block' : 'none',
    };

    return (
      <div className={cs.root}>
        {this.props.children}
        <div style={style} className={cs.content} onClick={this.props.onClose} role="presentation">
          {this.props.content}
        </div>
      </div>
    );
  }
}

Blurable.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Blurable;
