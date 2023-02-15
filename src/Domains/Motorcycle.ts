import IMotorcycle from '../Interfaces/IMotorcycle';

class Motorcycle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined;
  protected buyValue: number;
  private category: string;
  private engineCapacity: number;

  constructor(moto: IMotorcycle & { id?: string }) {
    this.id = moto.id;
    this.model = moto.model;
    this.year = moto.year;
    this.color = moto.color;
    this.status = moto.status;
    this.buyValue = moto.buyValue;
    this.category = moto.category;
    this.engineCapacity = moto.engineCapacity;
  }

  getId() {
    return this.id;
  }

  getModel() {
    return this.model;
  }

  getYear() {
    return this.year;
  }

  getColor() {
    return this.color;
  }

  getStatus() {
    return this.status;
  }

  getBuyValue() {
    return this.buyValue;
  }

  getCategory() {
    return this.category;
  }

  getEngineCapacity() {
    return this.engineCapacity;
  }
}

export default Motorcycle;
