import {
  Model,
  Schema,
  model,
  models,
} from 'mongoose';

import IMotorcycle from '../Interfaces/IMotorcycle';

class MotorcyclesModel {
  private schema: Schema;
  private model: Model<IMotorcycle>;

  constructor() {
    this.schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    this.model = models.Payment || model('Motorcycle', this.schema);
  }

  public async create(moto: IMotorcycle): Promise<IMotorcycle> {
    return this.model.create({ ...moto });
  }
}

export default MotorcyclesModel;
