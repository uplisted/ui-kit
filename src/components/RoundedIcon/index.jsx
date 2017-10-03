import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import Flex from '../Flex';
import cs from './component.pcss';

const RoundedIcon = (props) => {
  const style = {
    borderColor: props.color,
  };

  return (
    <div className={cs.root} style={style}>
      <Flex xs={{ align: 'center', justify: 'center', height: '100%' }}>
        <Icon
          icon={props.icon}
          fontSize={14}
          color={props.color}
          hoverColor={props.hoverColor}
          pointer
        />
      </Flex>
    </div>
  );
};

RoundedIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
};

RoundedIcon.defaultProps = {
  color: '#000000',
  hoverColor: '#000000',
};

export default RoundedIcon;
