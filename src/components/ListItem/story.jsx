import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import ListItem from './index';

storiesOf('ListItem', module)
  .add('default', withInfo(() => {
    return (
      <ul>
        <ListItem>Hello World</ListItem>
      </ul>
    );
  }));
