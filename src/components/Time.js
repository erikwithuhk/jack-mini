import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
};

class Time extends Component {
  render() {
    return (
      <div>
        <h1>Time</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

Time.propTypes = propTypes;

export default Time;
