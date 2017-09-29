import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Flex from '../Flex';
import Icon from '../Icon';
import cs from './component.pcss';

const BreadCrumbs = (props) => {
  const map = (item, i) => {
    const icon = i === (props.links.length - 1) ? null : <Icon icon="right-arrow" fontSize={11} />;

    return (
      <div key={i} className={cs.item}>
        <NavLink to={item.url} className={cs.link} activeClassName={cs.active}>
          <span>{item.title}</span>
          {icon}
        </NavLink>
      </div>
    );
  };

  return (
    <Flex xs={{ align: 'center' }}>
      {props.links.map(map)}
    </Flex>
  );
};

BreadCrumbs.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BreadCrumbs;
