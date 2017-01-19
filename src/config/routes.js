import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from '../components/Layout';
import Home from '../components/Home';
import UserForm from '../components/UserForm';
import NotFoundPage from '../components/NotFound';

const routes = (
  <Route path="/" component={Layout} >
    <IndexRoute component={Home} />
    <Route path="signup" component={UserForm} />
    <Route path="login" component={UserForm} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default routes;
