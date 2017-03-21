import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', (req, res) => {
  res.status(200).json('This is the user router');
});

export default userRouter;
