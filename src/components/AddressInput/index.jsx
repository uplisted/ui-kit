import React from 'react';
import PropTypes from 'prop-types';
import scriptLoader from 'react-async-script-loader';
import Icon from '../Icon';
import FormControl from './FormControl';
import cs from './component.pcss';
import AddressContainer from './AddressContainer';
import AddressLineRow from './AddressRow';

class AddressInput extends React.Component {
  constructor() {
    super();

    this.state = {
      addresses: [],
      activeIndex: -1,
    };
  }

  componentWillUnmount() {
    clearTimeout(this.time);
  }

  onKeyDown(event) {
    event.stopPropagation();

    // enter: 13
    // up arrow: 18
    // down arrow: 40

    switch (event.keyCode) {
      case 13: {
        const { activeIndex, addresses } = this.state;

        if (activeIndex > -1 && activeIndex <= addresses.length - 1) {
          this.setState({ addresses: [] }, () => {
            this.props.onChange(addresses[activeIndex].description);
          });
        }

        this.input.closest('[tabindex]').focus();
        break;
      }
      case 38: {
        this.goTo(-1);
        break;
      }
      case 40: {
        this.goTo(1);
        break;
      }
      default:
        break;
    }
  }

  onClick(location) {
    this.setState({ addresses: [] }, () => {
      this.props.onChange(location);
    });
  }

  onChange(evt) {
    const input = evt.target.value;

    this.props.onChange(input);

    // terminate function execution if
    // google api isn't loaded
    if (!this.props.isScriptLoaded) {
      throw new Error('Google map library is not loaded');
    }

    // initiate service
    const service = new window.google.maps.places.AutocompleteService();

    // terminate function execution if
    // input is empty strin
    if (input === '') {
      this.setState({
        addresses: [],
        activeIndex: -1,
      });

      return;
    }

    // parse predictions
    service.getQueryPredictions({ input }, this.parsePredictions.bind(this));
  }

  onBlur() {
    this.time = setTimeout(
      () => {
        this.setState({
          addresses: [],
        });
      },
      100,
    );
  }

  parsePredictions(predictions, status) {
    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
      this.setState({
        addresses: predictions,
        activeIndex: -1,
      });
    }
  }

  goTo(incrementIndex) {
    const { activeIndex, addresses } = this.state;

    if (incrementIndex === -1 && activeIndex > -1) {
      this.setState({
        activeIndex: activeIndex - 1,
      });
    } else if (incrementIndex === 1 && activeIndex < addresses.length - 1) {
      this.setState({
        activeIndex: activeIndex + 1,
      });
    }
  }

  renderAddresses() {
    const map = (item, i) => {
      return (
        <AddressLineRow
          address={item}
          isActive={this.state.activeIndex === i}
          key={i}
          onClick={this.onClick.bind(this)}
        />
      );
    };

    return this.state.addresses.map(map);
  }

  render() {
    const isHidden = !this.state.addresses.length;

    return (
      <div
        role="presentation"
        className={cs.root}
        onKeyDown={this.onKeyDown.bind(this)}
        ref={(i) => {
          this.input = i;
        }}
        onBlur={this.onBlur.bind(this)}
      >
        <div className={cs.icon}>
          <Icon icon="search" fontSize={18} color="#cdd0d6" />
        </div>
        <FormControl
          value={this.props.value}
          onChange={this.onChange.bind(this)}
          placeholder={this.props.placeholder}
        />
        <AddressContainer isHidden={isHidden}>
          {this.renderAddresses()}
        </AddressContainer>
      </div>
    );
  }
}

AddressInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  isScriptLoaded: PropTypes.bool,
};

AddressInput.defaultProps = {
  placeholder: '',
  isScriptLoaded: false,
};

export default scriptLoader([
  'https://maps.googleapis.com/maps/api/js?key=AIzaSyBavG_x_PjcUz7ZLKBYa8XYJpXbzegQ15Q&libraries=places',
])(AddressInput);
