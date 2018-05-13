import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';
import DropDownMenu from './index';

const items = [
  {
    label: 'Hello World',
    value: {
      name: 'Uplisted',
      id: '12345',
    },
  },
  {
    label: 'Hello Everyone',
    value: {
      name: 'Testing-Uplisted',
      id: '123456',
    },
  },
];

storiesOf('DropDownMenu', module)
  .add('default', withInfo(() => (
    <DropDownMenu
      placeholder="Price"
      items={items}
      active={items[0]}
      onChange={() => true}
    />
  )));
