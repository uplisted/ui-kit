import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import withInfo from '../withInfo';

import ListingCard from './index';

const listing = {
  isActive: false,
  adsRunning: false,
  imageSrc: 'https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg',
  price: '1,445,500',
  photoCount: 34,
  isFavorite: true,
  address: '15 Green Side',
  city: 'Campebellburg, KY 4c590',
  beds: 4,
  baths: 2,
  sq: 2500,
  dateListed: '12 Jan 2017',
};

storiesOf('ListingCard', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('default', withInfo(() => {
    return (
      <ListingCard
        listing={listing}
        onToggleFavorite={() => false}
        onActivateAds={() => false}
        detailsUrl="/test"
      />
    );
  }));
