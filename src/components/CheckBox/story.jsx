import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import CheckBox from './index';

storiesOf('CheckBox', module)
  .add('default', withInfo(() => <CheckBox onChange={() => false} isChecked />));
