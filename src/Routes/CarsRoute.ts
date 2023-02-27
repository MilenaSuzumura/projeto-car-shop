import { Router } from 'express';
import CarsController from '../Controllers/CarsController';

const carRoute = Router();

carRoute.get(
  '/',
  (req, res, next) => new CarsController(req, res, next).getAll(),
);

carRoute.get(
  '/:id',
  (req, res, next) => new CarsController(req, res, next).getById(),
);

carRoute.post(
  '/',
  (req, res, next) => new CarsController(req, res, next).createCar(),
);

export default carRoute;
