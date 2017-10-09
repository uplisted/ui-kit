import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Flex from '../../components/Flex';
import Col from '../../components/Col';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import Padding from '../Padding';
import cs from './component.pcss';

const ListingGridView = (props) => {
  const { listing } = props;
  const favoriteIcon = listing.isFavorite ? 'heart_full' : 'heart';
  let badge;

  if (listing.isActive) {
    const title = listing.adsRunning ? 'Ads are running' : 'Ads are not running';
    badge = <div className={`${cs.adStatus} ${listing.adsRunning ? cs.enabled : cs.disabled}`} title={title} />;
  } else {
    badge = <div className={cs.soldBadge} >Sold</div>;
  }

  return (
    <div className={cs.root}>
      <div className={cs.imageOverlay}>
        <div className={cs.badgeContainer}>
          <Flex xs={{ justify: 'flex-end' }}>
            {badge}
          </Flex>
        </div>
        <div className={cs.imageContent}>
          <Flex xs={{ justify: 'space-between', align: 'center' }}>
            <Col xs={{ left: 10 }}>
              <div className={cs.price}>{listing.price}</div>
            </Col>
            <Col>
              <Flex xs={{ align: 'center' }}>
                <Col xs={{ right: 10 }}>
                  <span className={cs.photoCount}>{listing.photoCount}</span>
                </Col>
                <Col xs={{ right: 10 }}>
                  <Icon icon="photo" fontSize={12} color="#ffffff" />
                </Col>
                <Col>
                  <div role="presentation" className={cs.favorite} onClick={props.onToggleFavorite}>
                    <Flex xs={{ align: 'center', justify: 'center', height: '100%' }}>
                      <Icon icon={favoriteIcon} color="#ffffff" fontSize={12} />
                    </Flex>
                  </div>
                </Col>
              </Flex>
            </Col>
          </Flex>
        </div>
        <img className={cs.image} src={props.listing.imageSrc} alt={props.listing.address} />
      </div>
      <div className={cs.content}>
        <Padding padding={{ right: 16, bottom: 12, left: 16 }}>
          <Padding padding={{ top: 15, bottom: 10 }}>
            <div className={cs.title}>{listing.address}</div>
            <div className={cs.description}>{listing.city}</div>
          </Padding>
          <hr />
          <Padding padding={{ top: 15, bottom: 10 }}>
            <div className={cs.title}>Date Listed</div>
            <div className={cs.description}>{listing.dateListed}</div>
          </Padding>
          <hr />
          <Padding padding={{ top: 15, bottom: 10 }}>
            <div className={cs.title}>House</div>
            <Flex xs={{ justify: 'space-between' }}>
              <div>
                <div className={cs.title}>{listing.beds}</div>
                <div className={cs.description}>Beds</div>
              </div>
              <div>
                <div className={cs.title}>{listing.baths}</div>
                <div className={cs.description}>Baths</div>
              </div>
              <div>
                <div className={cs.title}>{listing.sq}</div>
                <div className={cs.description}>Sq</div>
              </div>
            </Flex>
          </Padding>
        </Padding>
        <div className={cs.hoverContent}>
          <Flex xs={{ align: 'center', justify: 'center', height: '100%' }}>
            <div>
              <Padding padding={{ bottom: 10 }}>
                <Link to={props.detailsUrl}>
                  <Button>View Details</Button>
                </Link>
              </Padding>
              <Padding padding={{ top: 10 }}>
                <Button onClick={props.onActivateAds}>Activate Ads</Button>
              </Padding>
            </div>
          </Flex>
        </div>
      </div>
    </div>
  );
};

ListingGridView.propTypes = {
  listing: PropTypes.shape({
    isActive: PropTypes.bool.isRequired,
    adsRunning: PropTypes.bool.isRequired,
    imageSrc: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    photoCount: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    beds: PropTypes.number.isRequired,
    baths: PropTypes.number.isRequired,
    sq: PropTypes.number.isRequired,
    dateListed: PropTypes.string.isRequired,
  }).isRequired,
  detailsUrl: PropTypes.string.isRequired,
  onActivateAds: PropTypes.func.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
};

export default ListingGridView;
