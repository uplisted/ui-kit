import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import withInfo from '../withInfo';

import TabItem from './index';

storiesOf('TabItem', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('simple', withInfo(() => {
    return (
      <div>
        <TabItem href="/home">Home</TabItem>
        <TabItem href="/about">About</TabItem>
      </div>
    );
  }));
