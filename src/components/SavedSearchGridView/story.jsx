import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import SavedSearchGridView from './index';

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

storiesOf('SavedSearchGridView', module)
  .add('simple', withInfo(() => {
    return (
      <div style={{ width: 300, marginTop: 20, marginLeft: 20 }}>
        <SavedSearchGridView search={search} />
      </div>
    );
  }));
