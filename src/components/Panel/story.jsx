import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import Panel from '../Panel';
import PanelHeader from '../PanelHeader';
import PanelContent from '../PanelContent';

const style = {
  width: 300,
  height: 300,
  marginTop: 20,
  marginLeft: 20,
};

storiesOf('Panel', module)
  .add('simple', withInfo(() => {
    return (
      <div style={style}>
        <Panel>
          <PanelHeader>
            Panel Header
          </PanelHeader>
          <PanelContent>
            Panel Content
          </PanelContent>
        </Panel>
      </div>
    );
  }));
