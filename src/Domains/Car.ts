import ICar from '../Interfaces/ICar';

class Car {
  private id: string | undefined;
  private model: string;
  private year: number;
  private color: string;
  private status: boolean | undefined;
  private buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar & { id?: string }) {
    this.id = car.id;
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.status = car.status;
    this.buyValue = car.buyValue;
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }

  setId(id: string) {
    this.id = id;
  }

  getId() {
    return this.id;
  }

  setModel(model: string) {
    this.model = model;
  }

  getModel() {
    return this.model;
  }

  setYear(year: number) {
    this.year = year;
  }

  getYear() {
    return this.year;
  }

  setColor(color: string) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }

  setStatus(status: boolean) {
    this.status = status;
  }

  getStatus() {
    return this.status;
  }

  setBuyValue(buyValue: number) {
    this.buyValue = buyValue;
  }

  getBuyValue() {
    return this.buyValue;
  }

  setDoorsQty(doorsQty: number) {
    this.doorsQty = doorsQty;
  }

  getDoorsQtye() {
    return this.doorsQty;
  }

  setSeatsQty(seatsQty: number) {
    this.seatsQty = seatsQty;
  }

  getSeatsQty() {
    return this.seatsQty;
  }
}

export default Car;
