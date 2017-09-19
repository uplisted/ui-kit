import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import RoundedIcon from './index';

storiesOf('RoundedIcon', module)
  .add('simple', withInfo(() => {
    return (
      <RoundedIcon icon="search" />
    );
  }));
