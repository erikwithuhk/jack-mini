import React from 'react';
import { Link } from 'react-router';

const header = () => (
  <header>
    <Link to="/">
      <img src="images/jack-mini-logo.png" alt="Jack Mini logo" />
      <h1>Jack Mini</h1>
    </Link>
  </header>
);

export default header;
