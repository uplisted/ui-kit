import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import FormGroup from './index';
import Input from '../Input';

storiesOf('FormGroup', module)
  .add('label', withInfo(() => {
    return (
      <FormGroup label="Simple label">
        <Input value="Hello World" />
      </FormGroup>
    );
  }));
