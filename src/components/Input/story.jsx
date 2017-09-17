import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import Input from './index';

const style = {
  width: 500,
  height: 500,
  marginTop: 20,
  marginLeft: 20,
};

const onChange = () => {
  return false;
};

storiesOf('Input', module)
  .add('full bordered', withInfo(() => {
    return (
      <div style={style}>
        <Input value="Hello World" onChange={onChange} bordered />
      </div>
    );
  }))
  .add('bottom border', withInfo(() => {
    return (
      <div style={style}>
        <Input value="Hello World" onChange={onChange} bordered={false} />
      </div>
    );
  }));
