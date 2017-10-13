import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import Hr from './index';

storiesOf('Hr', module)
  .add('default', withInfo(() => {
    return (
      <Hr />
    );
  }));
