import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import PhotoSelector from '../PhotoSelector';

const photos = [
  'https://s3.amazonaws.com/retsly-importd-production/test_data/listings/25.jpg',
  'https://s3.amazonaws.com/retsly-importd-production/test_data/listings/27.jpg',
];

const selected = [
  'https://s3.amazonaws.com/retsly-importd-production/test_data/listings/27.jpg',
];

storiesOf('PhotoSelector', module)
  .add('default', withInfo(() => {
    return (
      <PhotoSelector onToggle={() => {}} photos={photos} selected={selected} />
    );
  }));
