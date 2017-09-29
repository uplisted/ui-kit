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

  getContentRef(contentRef) {
    this.contentRef = contentRef;
  }

  clickHandler(evt) {
    // needs to be opened
    // ref contains target and !this.props.isOpen
    if (this.ref.contains(evt.target) && !this.props.isOpen) {
      this.props.onToggle();
      return;
    }

    // needs to be closed
    if (!this.contentRef.contains(evt.target) && this.props.isOpen) {
      this.props.onToggle();
    }
  }

  render() {
    const style = {
      display: this.props.isOpen ? 'block' : 'none',
    };

    return (
      <div className={cs.root} ref={this.getRef.bind(this)}>
        {this.props.children}
        <div style={style} ref={this.getContentRef.bind(this)}>
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
  onToggle: PropTypes.func.isRequired,
};

export default Blurable;
