import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import SearchInput from './index';

const onChange = () => {
  return false;
};

storiesOf('SearchInput', module)
  .add('simple', withInfo(() => {
    return (
      <SearchInput value="Hello World" onChange={onChange} />
    );
  }));
