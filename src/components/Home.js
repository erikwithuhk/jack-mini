import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
};

class Home extends Component {
  render() {
    return (
      <section className="home">
        <section className="intro">
          <h1>Race your teammates to finish the New York Times mini</h1>
        </section>
        <section className="cta">
          <Link to="/login"><button className="btn--primary">Log in</button></Link>
          <Link to="/signup"><button className="btn--secondary">Sign up</button></Link>
        </section>
      </section>
    );
  }
}

Home.propTypes = propTypes;

export default Home;
