import {
  Model,
  Schema,
  model,
  models,
} from 'mongoose';

class AbstractODM<T> {
  protected schema: Schema;
  protected model: Model<T>;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async getAll(): Promise<Array<T>> {
    return this.model.find();
  }

    
  public async getById(id: string): Promise<T | null> {
    return this.model.findById(id);
  }
}

export default AbstractODM;