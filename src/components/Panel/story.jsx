import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';

import Panel from '../Panel';
import PanelHeader from '../PanelHeader';
import PanelContent from '../PanelContent';

storiesOf('Panel', module)
  .add('default', withInfo(() => (
    <Panel>
      <PanelHeader>
        Panel Header
      </PanelHeader>
      <PanelContent>
        Panel Content
      </PanelContent>
    </Panel>
  )));
