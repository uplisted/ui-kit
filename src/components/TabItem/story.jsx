import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import TabItem from './index';

const style = {
  width: 200,
};

storiesOf('TabItem', module)
  .add('simple', withInfo(() => {
    return (
      <div style={style}>
        <TabItem isActive={false}>
          Cost Per Lead
        </TabItem>
      </div>
    );
  }));
