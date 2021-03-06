import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import Image from './index';

storiesOf('Image', module)
  .add('default', withInfo(() => <Image src="https://www.w3schools.com/bootstrap/paris.jpg" alt="Paris" width={200} />))
  .add('rounded', withInfo(() => (
    <Image
      src="https://www.w3schools.com/bootstrap/paris.jpg"
      alt="Paris"
      width={200}
      type="rounded"
    />
  )))
  .add('circle', withInfo(() => (
    <Image
      src="https://www.w3schools.com/bootstrap/paris.jpg"
      alt="Paris"
      width={200}
      type="circle"
    />
  )));
