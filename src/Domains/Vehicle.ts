import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  public id: string | undefined;
  public status: boolean | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected buyValue: number;

  constructor(vehicle: IVehicle) {
    this.id = vehicle.id;
    this.model = vehicle.model;
    this.year = vehicle.year;
    this.color = vehicle.color;
    this.status = vehicle.status;
    this.buyValue = vehicle.buyValue;
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
}

export default Vehicle;
