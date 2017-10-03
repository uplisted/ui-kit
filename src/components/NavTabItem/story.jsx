import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import withInfo from '../withInfo';

import NavTabItem from './index';

storiesOf('NavTabItem', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('default', withInfo(() => {
    return (
      <div>
        <NavTabItem href="/home">Home</NavTabItem>
        <NavTabItem href="/about">About</NavTabItem>
      </div>
    );
  }));
