import path from 'path';
import Express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import apiRouter from './app/routes/apiRouter';

import { Router } from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './config/routes';
import NotFoundPage from './components/NotFound';

const app = new Express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(logger('dev'));

app.use('/api', apiRouter);

app.use(Express.static(path.join(__dirname, 'static')));

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
        markup = renderToString(<RouterContext {...renderProps} />);
      } else {
        markup = renderToString(<NotFoundPage />);
        res.status(404);
      }
      return res.render('index', { markup });
    },
  );
});

export default app;
