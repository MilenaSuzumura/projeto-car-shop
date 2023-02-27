import Motorcycle from '../Domains/Motorcycle';
import MotorcyclesModel from '../Models/MotorcyclesODM';
import IMotorcycle from '../Interfaces/IMotorcycle';

class MotorcyclesService {
  motorcyclesModel = new MotorcyclesModel();

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
      const newMoto = await this.motorcyclesModel.create(moto);
      return this.createMotoDomain(newMoto);
    }
  }

  async getAll() {
    const getAll = await this.motorcyclesModel.getAll();
    if (getAll !== null) {
      const result = getAll.map((moto) => this.createMotoDomain(moto as IMotorcycle));
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
    const getById = await this.motorcyclesModel.getById(id);
    if (typeof getById !== 'object') {
      return { 
        status: 200,
        result: this.createMotoDomain(getById),
      };
    }

    return {
      status: 404,
      result: { message: 'Invalid mongo id' },
    };
  }
}

export default MotorcyclesService;
