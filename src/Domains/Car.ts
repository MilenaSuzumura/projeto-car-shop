import ICar from '../Interfaces/ICar';

class Car {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    this.id = car.id;
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.status = car.status;
    this.buyValue = car.buyValue;
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
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

  protected getDoorsQty() {
    return this.doorsQty;
  }

  protected getSeatsQty() {
    return this.seatsQty;
  }
}

export default Car;
