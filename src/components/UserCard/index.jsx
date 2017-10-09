import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Flex from '../Flex';
import Col from '../Col';
import cs from './component.pcss';

const UserCard = (props) => {
  const { user } = props;

  return (
    <div className={cs.root}>
      <Link to="/lead/me/info">
        <Flex xs={{ height: 'auto' }}>
          <Col>
            <img src={user.imageSrc} alt={user.fullName} />
          </Col>
          <Col xs={{ left: 10 }}>
            <div className={cs.fullName}>{user.fullName}</div>
            <div className={cs.createdDate}>{user.createdDate}</div>
            <div className={cs.email}>{user.email}</div>
            <div className={cs.phoneNumber}>{user.phoneNumber}</div>
            <div className={cs.listingPrice}>{user.listingPrice}</div>
            <div className={cs.listingAddress}>{user.listingAddress}</div>
            <div className={cs.zipCode}>{user.zipCode}</div>
          </Col>
        </Flex>
      </Link>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    imageSrc: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    listingPrice: PropTypes.string.isRequired,
    listingAddress: PropTypes.string.isRequired,
    zipCode: PropTypes.string.isRequired,
    createdDate: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserCard;
