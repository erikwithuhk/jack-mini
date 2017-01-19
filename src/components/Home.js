import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
};

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/signup"><button className="main-button">Play now</button></Link>
      </div>
    );
  }
}

Home.propTypes = propTypes;

export default Home;
