import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../Flex';
import Icon from '../Icon';
import cs from './component.pcss';

const SavedSearchGridView = (props) => {
  const { search } = props;

  return (
    <div className={cs.root}>
      <div className={cs.map}>
        <iframe
          title="Google map"
          width="100%"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowTransparency="true"
          src="//www.google.com/maps/embed/v1/directions?origin=Tate+Modern
      &destination=Tower+of+London
      &key=AIzaSyBN8mkDtBiKsBqgSKSzONGfPIfAifHkBxo"
        />
      </div>
      <div className={cs.content}>
        <Flex xs={{ justify: 'space-between' }}>
          <div>
            <div className={cs.title}>Location</div>
            <div className={cs.description}>{search.location}</div>
          </div>
          <div>
            <Icon color="#7f8590" fontSize={17} icon="location" />
          </div>
        </Flex>
        <hr />
        <Flex xs={{ justify: 'space-between' }}>
          <div>
            <div className={cs.title}>Home Price</div>
            <div className={cs.description}>Min {search.minPrice}</div>
            <div className={cs.description}>Max {search.maxPrice}</div>
          </div>
          <div>
            <div className={cs.title}>Lot Size</div>
            <div className={cs.description}>Min {search.minLotSize}</div>
            <div className={cs.description}>Max {search.maxLotSize}</div>
          </div>
        </Flex>
        <hr />
        <Flex xs={{ justify: 'space-between' }}>
          <div>
            <div className={cs.title}>Home Type</div>
            <div className={cs.description}>{search.homeType}</div>
          </div>
          <div>
            <div className={cs.title}>Beds</div>
            <div className={cs.description}>{search.beds}</div>
          </div>
          <div>
            <div className={cs.title}>Baths</div>
            <div className={cs.description}>{search.baths}</div>
          </div>
        </Flex>
      </div>
    </div>
  );
};

SavedSearchGridView.propTypes = {
  search: PropTypes.shape({
    location: PropTypes.string.isRequired,
    minPrice: PropTypes.string.isRequired,
    maxPrice: PropTypes.string.isRequired,
    minLotSize: PropTypes.string.isRequired,
    maxLotSize: PropTypes.string.isRequired,
    homeType: PropTypes.string.isRequired,
    beds: PropTypes.string.isRequired,
    baths: PropTypes.string.isRequired,
  }).isRequired,
};

export default SavedSearchGridView;
