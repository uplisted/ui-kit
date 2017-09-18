import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import FormGroup from './index';
import Input from '../Input';

const style = {
  width: 400,
  height: 400,
  marginLeft: 20,
  marginTop: 20,
};

storiesOf('FormGroup', module)
  .add('label', withInfo(() => {
    return (
      <div style={style}>
        <FormGroup label="Simple label">
          <Input value="Hello World" />
        </FormGroup>
      </div>
    );
  }));
