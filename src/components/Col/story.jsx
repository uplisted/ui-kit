import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import Flex from '../Flex';
import Col from './index';

const style = {
  backgroundColor: '#7178ff',
};

storiesOf('Col', module)
  .add('responsive grid', withInfo(() => {
    return (
      <Flex>
        <Col xs={12} lg={{ size: 5, left: 50 }}>
          <div style={style}>col-xs-12, col-lg-5</div>
        </Col>
        <Col xs={12} lg={{ size: 5, left: 50 }}>
          <div style={style}>col-xs-12, col-lg-5</div>
        </Col>
      </Flex>
    );
  }));
