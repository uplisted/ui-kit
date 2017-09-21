import React from 'react';
import FormControl from '../FormControl';
import cs from './component.pcss';
import AddressContainer from '../AddressContainer';
import AddressLineRow from '../AddressLineRow';

/**
 * @class AddressLineInput
 */
class AddressLineInput extends React.Component
{

  static propTypes = {
    onChange: React.PropTypes.func,
    value: React.PropTypes.string,
    placeholder: React.PropTypes.string
  };

  state = {
    addresses: [],
    activeIndex: -1
  }

  /**
   * @constructor
   */
  constructor()
  {
    super();
  }

  /**
   * Parse query predictions from google maps
   * @param {Array} predictions Array of predictions
   * @param {String} status Request status
   * @return {void}
   */
  parsePredictions( predictions, status )
  {
    if ( status === window.google.maps.places.PlacesServiceStatus.OK )
    {
      this.setState( {
        addresses: predictions,
        activeIndex: -1
      } );
    }
  }

  /**
   * onChange handler
   * @param {Object} evt Event instance
   * @return {void}
   */
  onChange( evt )
  {
    const input = evt.target.value;

    this.props.onChange( input );

    // terminate function execution if
    // google api isn't loaded
    if ( !window.gLoaded )
    {
      console.warn( 'Google maps api is not loaded: terminating execution' );

      return;
    }

    // initiate service
    const service = new window.google.maps.places.AutocompleteService();

    // terminate function execution if
    // input is empty strin
    if ( input === '' )
    {
      this.setState( {
        addresses: [],
        activeIndex: -1
      } );

      return;
    }

    // parse predictions
    service.getQueryPredictions( { input }, this.parsePredictions.bind( this ) );
  }

  /**
   * @param {string} location - Location
   * @param {Object} event - Event instance
   * @return {void}
   */
  onClick( location )
  {
    this.setState( { addresses: [] }, () =>
    {
      this.props.onChange( location );
    } );
  }

  /**
   * Render Component
   * @return {XML} xml
   */
  renderAddresses()
  {
    const map = ( item, i ) =>
    {
      return (
        <AddressLineRow
          address={ item }
          isActive={ this.state.activeIndex === i }
          key={ i }
          onClick={ this.onClick.bind( this ) }
        />
      );
    };

    return this.state.addresses.map( map );
  }

  /**
   * @param {Object} event Event instance
   * @return {void}
   */
  onKeyDown( event )
  {
    event.stopPropagation();

    // enter: 13
    // up arrow: 18
    // down arrow: 40

    switch ( event.keyCode )
    {
      case 13: {

        const { activeIndex, addresses } = this.state;

        if ( activeIndex > -1 && activeIndex <= addresses.length - 1 )
        {
          this.setState( { addresses: [] }, () =>
          {
            this.props.onChange( addresses[ activeIndex ].description );
          } );
        }

        this.input.closest( '[tabindex]' ).focus();
        break;
      }
      case 38: {
        this.goTo( -1 );
        break;
      }
      case 40: {
        this.goTo( 1 );
        break;
      }
      default:
        break;
    }
  }

  /**
   * Control activeIndex
   * @param {Int} incrementIndex go down if index is 1 and up if -1
   * @return {void}
   */
  goTo( incrementIndex )
  {
    let { activeIndex, addresses } = this.state;

    if ( incrementIndex === -1 && activeIndex > -1 )
    {
      this.setState( {
        activeIndex: --activeIndex
      } );
    }
    else if ( incrementIndex === 1 && activeIndex < addresses.length - 1 )
    {
      this.setState( {
        activeIndex: ++activeIndex
      } );
    }
  }

  /**
   * onBlur handler
   * @return {void}
   */
  onBlur()
  {
    this.time = setTimeout(
      () =>
      {
        this.setState( {
          addresses: []
        } );
      },
      100
    );
  }

  /**
   * Component will unmounted
   * @return {void}
   */
  componentWillUnmount()
  {
    clearTimeout( this.time );
  }

  /**
   * Render component
   * @return {XML} xml
   */
  render()
  {
    const isHidden = !this.state.addresses.length;

    return (
      <div
        className={ cs.root }
        onKeyDown={ this.onKeyDown.bind( this ) }
        ref={ ( i ) =>
        {
          this.input = i;
        } }
        tabIndex="0"
        onBlur={ this.onBlur.bind( this ) }>
        <FormControl
          value={ this.props.value }
          onChange={ this.onChange.bind( this ) }
          placeholder={ this.props.placeholder }
        />
        <AddressContainer isHidden={ isHidden }>
          { this.renderAddresses() }
        </AddressContainer>
      </div>
    );
  }
}

export default AddressLineInput;
