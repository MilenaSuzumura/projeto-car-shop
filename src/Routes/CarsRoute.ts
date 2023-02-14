import { Router } from 'express';
import CarsController from '../Controllers/CarsController';

const carRoute = Router();

carRoute.post(
  '/',
  (req, res, next) => new CarsController(req, res, next).createCar(),
);

carRoute.get(
  '/',
  (req, res, next) => new CarsController(req, res, next),
);

carRoute.get(
  '/:id',
  (req, res, next) => new CarsController(req, res, next),
);

export default carRoute;
