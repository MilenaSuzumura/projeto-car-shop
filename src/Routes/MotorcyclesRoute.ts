import { Router } from 'express';
import MotorcyclesController from '../Controllers/MotorcyclesController';

const motoRoute = Router();

motoRoute.post(
  '/',
  (req, res, next) => new MotorcyclesController(req, res, next).createMoto(),
);

motoRoute.get(
  '/',
  (req, res, next) => new MotorcyclesController(req, res, next).createMoto(),
);

export default motoRoute;
