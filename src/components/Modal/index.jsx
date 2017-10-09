import React from 'react';
import PropTypes from 'prop-types';
import cs from './component.pcss';

const Modal = (props) => {
  const rootClassName = props.isOpen ? '' : cs.hidden;
  const contentStyle = {
    width: props.width,
    overflowY: props.overflow,
    maxHeight: props.maxHeight || 'calc(100vh - 180px)',
  };

  return (
    <div className={rootClassName}>
      <div className={cs.overlay} onClick={props.onClose} role="presentation" />
      <div className={cs.content} style={contentStyle}>
        {props.children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  width: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  maxHeight: PropTypes.string,
  overflow: PropTypes.string,
};

Modal.defaultProps = {
  overflow: 'scroll',
  maxHeight: null,
};

export default Modal;
