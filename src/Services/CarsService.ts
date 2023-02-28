import Car from '../Domains/Car';
import CarsODM from '../Models/CarsODM';
import ICar from '../Interfaces/ICar';

class CarsService {
  carsModel = new CarsODM();

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
      const newCar = await this.carsModel.create(car);
      return this.createCarDomain(newCar);
    }
  }

  async getAll() {
    const getAll = await this.carsModel.getAll();
    if (getAll !== undefined) {
      const result = getAll.map((car) => this.createCarDomain(car as ICar));
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
    const getById = await this.carsModel.getById(id);
    if (getById !== null) {
      return { 
        status: 200,
        result: this.createCarDomain(getById),
      };
    }

    return {
      status: 422,
      result: { message: 'Invalid mongo id' },
    };
  }

  async update(id: string, car: ICar) {
    const getById = await this.carsModel.update(id, car);
    return getById;
  }
}

export default CarsService;
