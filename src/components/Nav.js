import React from 'react';
import { Link } from 'react-router';
import store from '../store';

const nav = props => (
  <nav>
    <Link to="/leaderboard"><p>Leaderboard</p></Link>
    <Link to="/times/new"><p>Add time</p></Link>
    <Link to={`/users/${props.id}`}><p>My account</p></Link>
  </nav>
);

export default nav;
