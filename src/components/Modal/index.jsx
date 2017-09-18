import React from 'react';
import PropTypes from 'prop-types';
import cs from './component.pcss';

const Modal = (props) => {
  const rootClassName = props.isOpen ? '' : cs.hidden;
  const contentStyle = {
    width: props.width,
    padding: props.hasPadding ? '61px 74px 43px 74px' : 0,
    overflowY: props.overflow,
    maxHeight: `calc(100vh - ${props.heightMargin}px)`,
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
  hasPadding: PropTypes.bool,
  overflow: PropTypes.string,
  heightMargin: PropTypes.number,
};

Modal.defaultProps = {
  hasPadding: true,
  overflow: 'scroll',
  heightMargin: 180,
};

export default Modal;
