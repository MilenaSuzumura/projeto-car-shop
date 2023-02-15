import Car from '../Domains/Car';
import CarsModel from '../Models/CarsModel';
import ICar from '../Interfaces/ICar';

class CarsService {
  private createCarDomain(car: ICar & { id?: string }): Car {
    return new Car({
      id: car.id,
      model: car.model,
      year: car.year,
      color: car.color,
      status: car.status,
      buyValue: car.buyValue,
      doorsQty: car.doorsQty,
      seatsQty: car.seatsQty,
    });
  }

  async createCar(car: ICar) {
    if (car !== undefined) {
      const carsModel = new CarsModel();
      const newCar = await carsModel.create(car);
      return this.createCarDomain(newCar);
    }
  }

  async getAll() {
    const carsModel = new CarsModel();
    const getAll = await carsModel.getAll();
    if (getAll !== null) {
      const result = await Promise.all(getAll.map((car) => this.createCarDomain(car as ICar)));
      return {
        status: 200,
        result,
      };
    }

    return {
      status: 404,
      result: { message: 'Car not found' },
    };
  }

  async getById(id: string) {
    const carsModel = new CarsModel();
    const getById = await carsModel.getById(id);
    if (getById !== null) {
      return { 
        status: 200,
        result: this.createCarDomain(getById),
      };
    }

    return {
      status: 404,
      result: { message: 'Invalid mongo id' },
    };
  }
}

export default CarsService;
