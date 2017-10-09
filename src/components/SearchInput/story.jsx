import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import SearchInput from './index';

storiesOf('SearchInput', module)
  .add('default', withInfo(() => {
    return (
      <SearchInput value="Hello World" onChange={() => false} />
    );
  }));
