import path from 'path';
import Express, { Router } from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import sassMiddleware from 'node-sass-middleware';
import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

import apiRouter from './app/routes/apiRouter';
import routes from './config/routes';
import NotFoundPage from './components/NotFound';
import store from './store';

const app = new Express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(logger('dev'));

app.use('/api', apiRouter);

app.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public', 'stylesheets'),
  debug: true,
  outputStyle: 'compressed',
  prefix: '/css',
  force: true,
}));

app.use(Express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  match(
    { routes, location: req.url },
    (err, redirectLocation, renderProps) => {
      if (err) {
        return res.status(500).send(err.message);
      }
      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }
      let markup;
      if (renderProps) {
        markup = renderToString(<Provider store={store} ><RouterContext {...renderProps} /></Provider>);
      } else {
        markup = renderToString(<NotFoundPage />);
        res.status(404);
      }
      return res.render('index', { markup });
    },
  );
});

export default app;
