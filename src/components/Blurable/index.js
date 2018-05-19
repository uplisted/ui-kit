import React from 'react';
import PropTypes from 'prop-types';
import cs from './index.css';

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
    const {
      onToggle,
      isOpen,
      closeOnContentClick,
    } = this.props;

    // needs to be opened
    // ref contains target and !this.props.isOpen
    if (this.ref.contains(evt.target) && !isOpen) {
      onToggle();
      return;
    }

    if (this.props.isOpen) {
      if (!closeOnContentClick && this.contentRef.contains(evt.target)) {
        return;
      }

      // needs to be closed
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
  closeOnContentClick: PropTypes.bool,
};

Blurable.defaultProps = {
  top: 5,
  closeOnContentClick: false,
};

export default Blurable;
