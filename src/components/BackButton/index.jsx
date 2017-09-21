import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from '../Icon';
import Flex from '../Flex';
import cs from './component.pcss';

const BackButton = (props) => {
  const rootClassName = `${cs.root} ${props.isHidden ? cs.hidden : ''}`;

  return (
    <div role="button" tabIndex={0} className={rootClassName}>
      <Link to={props.backUrl}>
        <Flex xs={{ align: 'center', justify: 'center', height: '100%' }}>
          <Icon icon="left-arrow" fontSize={11} color="#b4b4b4" />
        </Flex>
      </Link>
    </div>
  );
};

BackButton.propTypes = {
  backUrl: PropTypes.string.isRequired,
  isHidden: PropTypes.bool.isRequired,
};

export default BackButton;
