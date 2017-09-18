import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import Icon from './index';

storiesOf('Icon', module)
  .add('simple', withInfo(() => {
    return (
      <Icon icon="search" />
    );
  }))
  .add('font size and color', withInfo(() => {
    return (
      <Icon icon="search" color="#7178ff" fontSize={20} />
    );
  }));
