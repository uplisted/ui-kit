import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import Button from './index';

storiesOf('Button', module)
  // Default button
  .add('default', withInfo(() => <Button>Default Button</Button>))

  // White background
  .add('white', withInfo(() => <Button type="white">White background</Button>))

  // Transparent background
  .add('transparent', withInfo(() => (
    <div style={{ backgroundColor: '#c6c6c6', width: 300, height: 300 }}>
      <Button type="transparent">Transparent background</Button>
    </div>
  )))

  // Facebook colors
  .add('facebook', withInfo(() => <Button type="facebook" fullWidth>Connect to Facebook</Button>))

  // Submit button
  .add('submit', withInfo(() => <Button type="white" formType="submit" fullWidth>Submit</Button>))

  // Full width
  .add('full width', withInfo(() => <Button fullWidth>Full width</Button>));
