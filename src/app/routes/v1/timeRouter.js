import { Router } from 'express';
import TimeDAO from '../../services/TimeDAO';

const timeRouter = Router();

timeRouter.get('/', (req, res) => {
  TimeDAO.all()
         .then(times => res.status(200).json(times))
         .catch(err => res.status(500).json(err));
});

export default timeRouter;
