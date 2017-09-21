import React from 'react';
import PropTypes from 'prop-types';
import cs from './component.pcss';

class Blurable extends React.Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.clickHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.clickHandler);
  }

  getRef(ref) {
    this.ref = ref;
  }

  clickHandler(evt) {
    if (this.ref.contains(evt.target)) {
      return;
    }

    this.props.onClose();
  }

  render() {
    const style = {
      display: this.props.isOpen ? 'block' : 'none',
    };

    return (
      <div className={cs.root} ref={this.getRef.bind(this)}>
        {this.props.children}
        <div style={style} className={cs.content}>
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
