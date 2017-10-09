import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import Modal from './index';

storiesOf('Modal', module)
  .add('default', withInfo(() => {
    return (
      <Modal isOpen width={500} onClose={() => false}>
        Simple modal
      </Modal>
    );
  }));
