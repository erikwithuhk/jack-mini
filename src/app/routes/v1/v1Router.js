import { Router } from 'express';
import timeRouter from './timeRouter';
import userRouter from './userRouter';

const v1Router = Router();

v1Router.use('/times', timeRouter);
v1Router.use('/users', userRouter);

v1Router.get('/', (req, res) => {
  res.status(200).json('This is the API-V1');
});

export default v1Router;
