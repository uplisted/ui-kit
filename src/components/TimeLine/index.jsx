import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import cs from './component.pcss';

const TimeLine = (props) => {
  const collapsedClassName = props.isCollapsed ? cs.collapsed : '';
  const toggleIcon = props.isCollapsed ? 'open-timeline' : 'close';

  return (
    <div className={`${cs.root} ${collapsedClassName}`}>
      <div className={cs.line} />
      <div className={cs.icon} onClick={props.onToggle} role="button" tabIndex={0}>
        <Icon icon={toggleIcon} fontSize={16} color="#b1bbca" />
      </div>
      <div className={cs.content}>
        {props.children}
      </div>
    </div>
  );
};

TimeLine.propTypes = {
  children: PropTypes.node.isRequired,
  isCollapsed: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default TimeLine;
