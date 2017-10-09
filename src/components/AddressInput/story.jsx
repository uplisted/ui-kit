import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import State from '../state';
import AddressInput from './index';

storiesOf('AddressInput', module)
  .add('default', withInfo(() => {
    return (
      <State render={(state, setState) => {
        return (
          <AddressInput
            value={state.value || ''}
            placeholder="Type Here..."
            onChange={value => setState({ value })}
          />
        );
      }}
      />
    );
  }));
