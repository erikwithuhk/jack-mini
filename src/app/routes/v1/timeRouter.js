import { Router } from 'express';

const timeRouter = Router();

timeRouter.get('/', (req, res) => {
  res.status(200).json('This is the time router');
});

export default timeRouter;
