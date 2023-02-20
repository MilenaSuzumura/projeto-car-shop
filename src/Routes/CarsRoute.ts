import { Router } from 'express';
import CarsController from '../Controllers/CarsController';

const carRoute = Router();

carRoute.post(
  '/cars',
  (req, res, next) => new CarsController(req, res, next).createCar(),
);

carRoute.get(
  '/cars/:id',
  (req, res, next) => new CarsController(req, res, next).getById(),
);

carRoute.get(
  '/cars',
  (req, res, next) => new CarsController(req, res, next).getAll(),
);

export default carRoute;
