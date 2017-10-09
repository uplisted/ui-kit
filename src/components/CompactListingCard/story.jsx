import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import withInfo from '../withInfo';

import CompactListingCard from './index';

const listing = {
  infoText: 'Featured Listing',
  imageSrc: 'https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg',
  price: '$380,400',
  isFavorite: true,
  bedrooms: 4,
  bathrooms: 5,
  sqft: 1030,
};

storiesOf('CompactListingCard', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('default', withInfo(() => {
    return (
      <div style={{ width: 364, margin: '20px 30px' }}>
        <CompactListingCard
          listing={listing}
          onToggleFavorite={() => false}
        />
      </div>
    );
  }));
