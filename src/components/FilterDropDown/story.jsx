import React from 'react';
import { storiesOf } from '@storybook/react';
import withInfo from '../withInfo';
import FilterDropDown from './index';
import DropDownList from '../DropDownList';

const renderContent = () => {
  const options = [
    {
      value: 'one',
      label: 'One',
    },
    {
      value: 'two',
      label: 'Two',
    },
  ];

  return (
    <DropDownList options={options} value="one" onChange={() => false} />
  );
};

storiesOf('FilterDropDown', module)
  .add('default', withInfo(() => {
    return (
      <FilterDropDown
        icon="price"
        title="Price"
        content={renderContent()}
      />
    );
  }));
