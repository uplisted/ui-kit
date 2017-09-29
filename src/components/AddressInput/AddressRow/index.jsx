import React from 'react';
import PropTypes from 'prop-types';
import parseSubstr from './util/parseSubstr';
import cs from './component.pcss';

class AddressRow extends React.Component {
  onClick() {
    this.props.onClick(this.props.address.description);
  }

  renderText() {
    const subStr = parseSubstr(
      this.props.address.description,
      this.props.address.matched_substrings);

    const map = (item, i) => {
      const className = item.isMatched ?
        cs.matched :
        '';

      return (
        <span
          key={i}
          className={className}
        >
          { item.text }
        </span>
      );
    };

    return subStr.map(map);
  }

  render() {
    const className = this.props.isActive ?
      `${cs.root} ${cs.active}` :
      cs.root;

    return (
      <div
        role="presentation"
        className={className}
        onClick={this.onClick.bind(this)}
      >
        { this.renderText() }
      </div>
    );
  }
}

AddressRow.propTypes = {
  address: PropTypes.shape({
    description: PropTypes.string,
    matched_substrings: PropTypes.arrayOf(
      PropTypes.shape({
        offset: PropTypes.number,
        length: PropTypes.number,
      }),
    ),
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AddressRow;
