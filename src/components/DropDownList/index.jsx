import React from 'react';
import PropTypes from 'prop-types';
import cs from './component.pcss';

class DropDownList extends React.Component {
  constructor(props) {
    super(props);

    this.getActiveClass = this.getActiveClass.bind(this);
  }

  onChange(item, event) {
    this.props.onChange(item, event);
  }

  getActiveClass(item) {
    return item.value === this.props.value ? cs.active : '';
  }

  renderOptions() {
    const map = (item, index) => {
      const className = `${cs.item} ${this.getActiveClass(item)}`;

      return (
        <div
          key={index}
          role="presentation"
          onClick={this.onChange.bind(this, item)}
          className={className}
        >
          {item.label}
        </div>
      );
    };

    return this.props.options.map(map);
  }

  render() {
    return (
      <div className={cs.root}>
        {this.renderOptions(this.props.options)}
      </div>
    );
  }
}

DropDownList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DropDownList;
