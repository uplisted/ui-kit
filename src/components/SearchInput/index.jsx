import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import cs from './component.pcss';

const SearchInput = (props) => {
  return (
    <div className={cs.root}>
      <div className={cs.searchIcon}>
        <Icon icon="search" color="#b1bbca" fontSize={15} />
      </div>
      <input type="text" onChange={props.onChange} value={props.value} />
    </div>
  );
};

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchInput;
