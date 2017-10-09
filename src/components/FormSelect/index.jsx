import React from 'react';
import PropTypes from 'prop-types';
import Blurable from '../Blurable';
import Icon from '../Icon';
import Flex from '../Flex';
import DropDownList from '../DropDownList';
import cs from './component.pcss';

class FormSelect extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
    };

    this.onToggle = this.onToggle.bind(this);
  }

  onToggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  onChange(item, evt) {
    evt.stopPropagation();
    this.onToggle();
    this.props.onChange(item);
  }

  renderLabel() {
    const { options, value, placeholder } = this.props;

    for (let i = 0; i < options.length; i += 1) {
      if (value === options[i].value) {
        return options[i].label;
      }
    }

    return placeholder;
  }

  renderContent() {
    return (
      <DropDownList
        options={this.props.options}
        value={this.props.value}
        onChange={this.onChange.bind(this)}
      />
    );
  }

  render() {
    return (
      <Blurable
        content={this.renderContent()}
        isOpen={this.state.isOpen}
        onToggle={this.onToggle}
      >
        <div className={`${cs.input} ${this.state.isOpen ? cs.open : ''}`}>
          <Flex xs={{ align: 'center', justify: 'space-between' }}>
            <div className={cs.label} role="presentation">
              {this.renderLabel()}
            </div>
            <div className={cs.arrow}>
              <Icon icon="down-arrow" color="#474e60" fontSize={10} />
            </div>
          </Flex>
        </div>
      </Blurable>
    );
  }
}

FormSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

FormSelect.defaultProps = {
  placeholder: '',
};

export default FormSelect;
