import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import Padding from '../Padding';
import Text from '../Text';
import Flex from '../Flex';
import cs from './component.pcss';

const CompactListingCard = (props) => {
  const { listing } = props;
  const favoriteIcon = listing.isFavorite ? 'heart_full' : 'heart';
  const favoriteClass = `${cs.favorite} ${listing.isFavorite ? cs.isFavorite : ''}`;

  return (
    <div className={cs.root}>
      <div className={cs.image}>
        <div className={cs.imageOverlay}>
          <div className={cs.infoBadge}>
            <span>{listing.infoText}</span>
            <Icon pointer icon="info" color="#b3b8bf" />
          </div>
        </div>
        <img src={listing.imageSrc} alt={listing.infoText} width="100%" />
      </div>
      <Padding padding={{ left: 26, top: 26, right: 21, bottom: 19 }}>
        <Flex xs={{ justify: 'space-between', align: 'center' }}>
          <Text fontSize={24} color="#394053" fontWeight="bold">{listing.price}</Text>
          <div className={favoriteClass} onClick={props.onToggleFavorite} role="presentation">
            <Icon
              pointer
              icon={favoriteIcon}
              fontSize={20}
              color="#ffffff"
            />
          </div>
        </Flex>
        <Padding padding={{ top: 20, bottom: 40 }}>
          <Flex xs={{ justify: 'space-between', align: 'flex-end' }}>
            <Text color="#8f959f" fontSize={16}>
              7743 N 32nd Dr<br />
              Phoenix, AZ 85051
            </Text>
            <Text color="#bfbfbf" fontSize={14}>2 days ago</Text>
          </Flex>
        </Padding>
        <Flex xs={{ justify: 'space-between' }}>
          <div>
            <Flex>
              <Padding padding={{ right: 7 }}>
                <Icon icon="pillow" fontSize={20} color="#dbdfe5" />
              </Padding>
              <Text color="#394053" fontSize={16}>{listing.bedrooms} Ba</Text>
            </Flex>
          </div>
          <div>
            <Flex>
              <Padding padding={{ right: 7 }}>
                <Icon icon="bath" fontSize={20} color="#dbdfe5" />
              </Padding>
              <Text color="#394053" fontSize={16}>{listing.bathrooms} Br</Text>
            </Flex>
          </div>
          <div>
            <Flex>
              <Padding padding={{ right: 7 }}>
                <Icon icon="sqft" fontSize={20} color="#dbdfe5" />
              </Padding>
              <Text color="#394053" fontSize={16}>{listing.sqft} SQFT</Text>
            </Flex>
          </div>
        </Flex>
      </Padding>
    </div>
  );
};

CompactListingCard.propTypes = {
  listing: PropTypes.shape({
    imageSrc: PropTypes.string.isRequired,
    infoText: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    bedrooms: PropTypes.number.isRequired,
    bathrooms: PropTypes.number.isRequired,
    sqft: PropTypes.number.isRequired,
  }).isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
};

export default CompactListingCard;
