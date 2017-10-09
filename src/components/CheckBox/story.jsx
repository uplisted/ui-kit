import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import State from '../state';
import CheckBox from './index';

storiesOf('CheckBox', module)
  .add('default', withInfo(() => {
    return (
      <State render={(state, setState) => {
        return (
          <CheckBox
            onChange={() => setState({ isChecked: !state.isChecked })}
            isChecked={state.isChecked || false}
          />
        );
      }}
      />
    );
  }));
