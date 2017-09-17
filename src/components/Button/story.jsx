import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import Button from './index';

storiesOf('Button', module)
  .add('simple', withInfo(() => {
    return (
      <Button>Hello World</Button>
    );
  }))
  .add('white', withInfo(() => {
    return (
      <Button white>Hello World</Button>
    );
  }))
  .add('full width', withInfo(() => {
    return (
      <Button fullWidth>Hello World</Button>
    );
  }));
