import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from '../components/Layout';
import authRedirect from './authRedirect';
import Home from '../components/Home';
import UserForm from '../components/UserForm';
import Leaderboard from '../components/Leaderboard';
import NotFoundPage from '../components/NotFound';

const routes = (
  <Route path="/" component={Layout} >
    <IndexRoute component={Home} />
    <Route path="leaderboard" component={Leaderboard} onEnter={authRedirect} />
    <Route path="signup" component={UserForm} />
    <Route path="login" component={UserForm} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default routes;
