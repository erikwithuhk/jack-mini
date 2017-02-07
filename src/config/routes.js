import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from '../components/Layout';
import authRedirect from './authRedirect';
import Home from '../components/Home';
import AuthForm from '../components/auth/AuthForm';
import UserDetail from '../components/users/UserDetail';
import Leaderboard from '../components/Leaderboard';
import NotFoundPage from '../components/NotFound';

const routes = (
  <Route path="/" component={Layout} >
    <IndexRoute component={Home} />
    <Route path="leaderboard" component={Leaderboard} onEnter={authRedirect} />
    <Route path="users" >
      <Route path=":id" component={UserDetail} />
    </Route>
    <Route path="signup" component={AuthForm} />
    <Route path="login" component={AuthForm} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default routes;
