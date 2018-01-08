import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import Button from './index';

storiesOf('Button', module)
  .add('default', withInfo(() => {
    return (
      <Button>Hello World</Button>
    );
  }))
  .add('white', withInfo(() => {
    return (
      <Button type="white">Hello World</Button>
    );
  }))
  .add('transparent', withInfo(() => {
    return (
      <div style={{ backgroundColor: '#c6c6c6', width: 300, height: 300 }}>
        <Button type="transparent">Hello World</Button>
      </div>
    );
  }))
  .add('facebook', withInfo(() => {
    return (
      <Button type="facebook" fullWidth>Connect to Facebook</Button>
    );
  }))
  .add('submit', withInfo(() => {
    return (
      <Button type="white" formType="submit" fullWidth>Submit</Button>
    );
  }))
  .add('full width', withInfo(() => {
    return (
      <Button fullWidth>Hello World</Button>
    );
  }));
