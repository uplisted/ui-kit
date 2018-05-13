import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import DropDownItem from './index';

const item = {
  label: 'Hello World',
  value: {
    name: 'Uplisted',
    id: '12345',
  },
};

storiesOf('DropDownItem', module)
  .add('default', withInfo(() => (
    <DropDownItem
      item={item}
      onClick={() => false}
      isActive
    />
  )));
