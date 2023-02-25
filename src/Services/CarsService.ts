import Car from '../Domains/Car';
import CarsODM from '../Models/CarsODM';
import ICar from '../Interfaces/ICar';

class CarsService {
  private createCarDomain(car: ICar): Car {
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
      const carsModel = new CarsODM();
      const newCar = await carsModel.create(car);
      return this.createCarDomain(newCar);
    }
  }

  async getAll() {
    const carsModel = new CarsODM();
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
    const carsModel = new CarsODM();
    const getById = await carsModel.getById(id);
    if (typeof getById !== 'object') {
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
