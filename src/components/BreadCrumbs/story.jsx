import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import withInfo from '../withInfo';

import BreadCrumbs from './index';

const links = [
  {
    url: '/state/phoenix',
    title: 'Phoenix',
  },
  {
    url: '/state/kentucky',
    title: 'Kentucky',
  },
  {
    url: '/state/arizona',
    title: 'Arizona',
  },
];

storiesOf('BreadCrumbs', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('default', withInfo(() => {
    return (
      <BreadCrumbs links={links} />
    );
  }));
