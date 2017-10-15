import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import LeadCard from './index';

const lead = {
  profilePicSrc: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAkGAAAAJDQyODIxZmUwLTEyMjYtNGVkNi04OWEwLWQ3ODU5YjkxNGQ1NQ.jpg',
  fullName: 'Ryan White',
  location: 'Louisville, KY 40206',
  averagePrice: '$1.2m',
  lastActive: 'Now',
};

storiesOf('LeadCard', module)
  .add('default', withInfo(() => {
    return (
      <LeadCard lead={lead} />
    );
  }));
