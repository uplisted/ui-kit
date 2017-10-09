import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import SavedSearchCard from './index';

const search = {
  location: 'Yerevan, Armenia',
  minPrice: '350',
  maxPrice: '600',
  minLotSize: '500sq',
  maxLotSize: '600sq',
  homeType: 'Lot',
  beds: '5',
  baths: '5',
};

storiesOf('SavedSearchCard', module)
  .add('default', withInfo(() => {
    return (
      <SavedSearchCard search={search} />
    );
  }));
