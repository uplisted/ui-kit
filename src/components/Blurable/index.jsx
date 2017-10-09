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
      transform: `translateY(${this.props.top}px)`,
    };

    return (
      <div className={cs.root} ref={this.getRef.bind(this)}>
        {this.props.children}
        <div style={style} className={cs.content} ref={this.getContentRef.bind(this)}>
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
  top: PropTypes.number,
};

Blurable.defaultProps = {
  top: 5,
};

export default Blurable;
