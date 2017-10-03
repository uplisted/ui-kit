import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import RoundedIcon from './index';

storiesOf('RoundedIcon', module)
  .add('default', withInfo(() => {
    return (
      <RoundedIcon icon="search" color="#c6c6c6" hoverColor="#7588ff" />
    );
  }));
