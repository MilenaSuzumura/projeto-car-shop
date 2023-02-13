import { Router } from 'express';
import CarsController from '../Controllers/CarsController';

const carRoute = Router();

carRoute.post(
  '/',
  (req, res, next) => new CarsController(req, res, next).createCar(),
);

/* routes.post(
  '/transfer',
  (req, res, next) => new TransferController(req, res, next).create(),
); */

export default carRoute;
