import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import withInfo from '../withInfo';

import SideMenuItem from './index';

storiesOf('SideMenuItem', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('default', withInfo(() => {
    return (
      <SideMenuItem icon="listing" href="/test">Hello World</SideMenuItem>
    );
  }));
