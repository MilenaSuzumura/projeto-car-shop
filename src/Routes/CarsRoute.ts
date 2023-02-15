import { Router } from 'express';
import CarsController from '../Controllers/CarsController';

const carRoute = Router();

carRoute.post(
  '/',
  (req, res, next) => new CarsController(req, res, next).createCar(),
);

carRoute.get(
  '/',
  (req, res, next) => new CarsController(req, res, next).getAll(),
);

carRoute.get(
  '/:id',
  (req, res, next) => new CarsController(req, res, next).getById(),
);

export default carRoute;
