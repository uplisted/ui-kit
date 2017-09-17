import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import Text from './index';

storiesOf('Text', module)
  .add('simple', withInfo(() => {
    return (
      <Text>Hello World</Text>
    );
  }));
