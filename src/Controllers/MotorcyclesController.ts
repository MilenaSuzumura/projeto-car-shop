import { NextFunction, Request, Response } from 'express';
import MotorcyclesService from '../Services/MotorcyclesService';
import IMotorcycle from '../Interfaces/IMotorcycle';

class MotorcyclesController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcyclesService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcyclesService();
  }

  async createMoto() {
    const { model, year, color, status, buyValue, category, engineCapacity } = this.req.body;
    const statusFinal = status !== undefined ? JSON.parse(status) : false;

    const newCar: IMotorcycle = {
      model,
      year,
      color,
      status: statusFinal,
      buyValue,
      category,
      engineCapacity,
    };

    const create = await this.service.createMoto(newCar);
    return this.res.status(201).json(create);
  }
}

export default MotorcyclesController;
