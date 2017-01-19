import { Router } from 'express';

const apiRouter = Router();

apiRouter.get('/', (req, res) => {
  res.status(200).json('This is the API');
});

export default apiRouter;
