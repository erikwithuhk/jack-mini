import React from 'react';
import { Link } from 'react-router';
import Nav from './Nav';

const header = () => (
  <header>
    <Link to="/"><img src="#" alt="Jack Mini logo" /></Link>
    <h1>Jack Mini</h1>
    <Nav />
  </header>
);

export default header;
