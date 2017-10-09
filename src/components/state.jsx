import React from 'react';
import PropTypes from 'prop-types';

class State extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.render(this.state, this.setState.bind(this))}
      </div>
    );
  }
}

State.propTypes = {
  render: PropTypes.func.isRequired,
};

export default State;
