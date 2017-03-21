import { Router } from 'express';
import UserDAO from '../../services/UserDAO';

const userRouter = Router();

userRouter.get('/', (req, res) => {
  UserDAO.all()
         .then(users => res.status(200).json(users))
         .catch(err => res.status(500).json(err));
});

export default userRouter;
