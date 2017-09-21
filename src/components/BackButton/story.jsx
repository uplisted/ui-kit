import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import withInfo from '../withInfo';

import BackButton from './index';

storiesOf('BackButton', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('simple', withInfo(() => {
    return (
      <BackButton backUrl="/test" isHidden={false} />
    );
  }));
