import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import Modal from './index';

const onClose = () => {
  return false;
};

storiesOf('Modal', module)
  .add('simple', withInfo(() => {
    return (
      <Modal isOpen width={500} onClose={onClose}>
        Simple modal
      </Modal>
    );
  }));
