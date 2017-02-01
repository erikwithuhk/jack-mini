import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
};

class Home extends Component {
  render() {
    return (
      <section className="home">
        <section className="logo">
          <img src="images/jack-mini-logo.png" alt="Jack Mini logo" />
          <h1>Jack Mini</h1>
        </section>
        <section className="intro">
          <h1>Race your teammates to finish the New York Times mini</h1>
          <section className="current-winner">
            <h2>In the lead this week</h2>
            <p className="current-winner__name">Jen Kenyan</p>
            <ul className="current-winner__times time-chart">
              <li className="time-chart__day">Monday: 0:36</li>
              <li className="time-chart__day">Tuesday: 0:36</li>
              <li className="time-chart__day">Wednesday: 0:36</li>
              <li className="time-chart__day">Thursday: 0:36</li>
              <li className="time-chart__day">Friday: 0:36</li>
            </ul>
          </section>
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
