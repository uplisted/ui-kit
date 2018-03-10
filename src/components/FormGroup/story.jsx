import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import FormGroup from './index';

storiesOf('FormGroup', module)
  .add('label', withInfo(() => (
    <FormGroup label="Label">
      <div>Content</div>
    </FormGroup>
  )));
