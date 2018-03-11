import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import FormGroup from './index';

storiesOf('FormGroup', module)
  .add('default', withInfo(() => (
    <FormGroup label="Label">
      <div>Content</div>
    </FormGroup>
  )))
  .add('error', withInfo(() => (
    <FormGroup label="Label" errorText="Email is required">
      <div>Content</div>
    </FormGroup>
  )));
