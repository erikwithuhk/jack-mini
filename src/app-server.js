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

// initialize the server and configure support for ejs templates
const app = new Express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(logger('dev'));

app.use('/api', apiRouter);

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'static')));

app.get('*', (req, res) => {
  match(
    { routes, location: req.url },
    (err, redirectLocation, renderProps) => {

      // in case of error display the error message
      if (err) {
        return res.status(500).send(err.message);
      }

      // in case of redirect propagate the redirect to the browser
      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }

      // generate the React markup for the current route
      let markup;
      if (renderProps) {
        // if the current route matched we have renderProps
        markup = renderToString(<RouterContext {...renderProps} />);
      } else {
        // otherwise we can render a 404 page
        markup = renderToString(<NotFoundPage />);
        res.status(404);
      }

      // render the index template with the embedded React markup
      return res.render('index', { markup });
    },
  );
});

export default app;
