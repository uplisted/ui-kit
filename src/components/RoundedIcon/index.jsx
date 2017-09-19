import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import Flex from '../Flex';
import cs from './component.pcss';

const RoundedIcon = (props) => {
  return (
    <div className={cs.root}>
      <Flex xs={{ align: 'center', justify: 'center', height: '100%' }}>
        <Icon icon={props.icon} fontSize={14} color="#abb7c5" />
      </Flex>
    </div>
  );
};

RoundedIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default RoundedIcon;
