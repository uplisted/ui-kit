import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import withInfo from '../withInfo';

import UserCard from './index';

const user = {
  imageSrc: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg',
  fullName: 'Arthur Khlghatya',
  email: 'arthur.khlghatyan@gmail.com',
  phoneNumber: '096516526',
  listingPrice: '$91000',
  listingAddress: 'Leningradyan 24 street',
  zipCode: '0046',
  createdDate: '12 Jan 2017',
};

storiesOf('UserCard', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('default', withInfo(() => {
    return (
      <UserCard user={user} />
    );
  }));