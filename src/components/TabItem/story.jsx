import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import TabItem from './index';

storiesOf('TabItem', module)
  .add('default', withInfo(() => {
    return (
      <TabItem isActive={false}>
        Cost Per Lead
      </TabItem>
    );
  }));
