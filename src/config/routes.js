import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from '../components/Layout';
import Home from '../components/Home';
import Time from '../components/Time';
import NotFoundPage from '../components/NotFound';

const routes = (
  <Route path="/" component={Layout} >
    <IndexRoute component={Home} />
    <Route path="time" component={Time} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default routes;
