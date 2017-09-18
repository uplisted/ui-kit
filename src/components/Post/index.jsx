import React from 'react';
import PropTypes from 'prop-types';
import cs from './component.pcss';

const TimeLineItem = (props) => {
  const descriptionClassName = props.description.length > 15 ? cs.longDesc : cs.shortDesc;

  return (
    <div className={cs.root}>
      <div className={cs.wrapper}>
        <div className={cs.title}>{props.title}</div>
        <div className={cs.date}>{props.date}</div>
        <div className={descriptionClassName}>{props.description}</div>
        <div className={cs.dot} />
      </div>
      <hr />
    </div>
  );
};

TimeLineItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TimeLineItem;
