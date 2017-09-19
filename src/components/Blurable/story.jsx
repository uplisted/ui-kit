import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import Blurable from './index';

const content = (
  <div style={{ width: 200, height: 200, backgroundColor: 'blue' }}>
    Hello World
  </div>
);

const onClose = () => {
  return false;
};

// storiesOf('Blurable', module)
//   .add('simple', withInfo(() => {
//     return (
//       <Blurable content={content} isOpen onClose={onClose}>
//         Hello World
//       </Blurable>
//     );
//   }));
