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
}

export default CarsService;
