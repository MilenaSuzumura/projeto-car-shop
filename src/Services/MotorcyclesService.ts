import Motorcycle from '../Domains/Motorcycle';
import MotorcyclesModel from '../Models/MotorcyclesODM';
import IMotorcycle from '../Interfaces/IMotorcycle';

class MotorcyclesService {
  private createMotoDomain(car: IMotorcycle & { id?: string }): Motorcycle {
    return new Motorcycle({
      id: car.id,
      model: car.model,
      year: car.year,
      color: car.color,
      status: car.status,
      buyValue: car.buyValue,
      category: car.category,
      engineCapacity: car.engineCapacity,
    });
  }

  async createMoto(moto: IMotorcycle) {
    if (moto !== undefined) {
      const motorcyclesModel = new MotorcyclesModel();
      const newMoto = await motorcyclesModel.create(moto);
      return this.createMotoDomain(newMoto);
    }
  }
}

export default MotorcyclesService;
