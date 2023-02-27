import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import CarsService from '../../../src/Services/CarsService';
import Car from '../../../src/Domains/Car';

describe('Testa o CarsService', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Valida se consegue cadastrar um carro', async function () {
    const carInput: ICar = {
      model: 'deasdaqs',
      year: 2005,
      color: 'green',
      status: true,
      buyValue: 12,
      doorsQty: 1,
      seatsQty: 1,
    };

    const carOutput: Car = new Car({
      id: '63319d80feb9f483ee823ac5',
      model: 'deasdaqs',
      year: 2005,
      color: 'green',
      status: true,
      buyValue: 12,
      doorsQty: 1,
      seatsQty: 1,
    });

    sinon.stub(Model, 'create').resolves(carOutput);
  
    const service = new CarsService();
    const result = await service.createCar(carInput);

    expect(result).to.be.deep.equal(carOutput);
  });

  it('Testa se getAll retorna todos os carros', async function () {
    const carList = [{
      id: '63319d80feb9f483ee823ac5',
      model: 'deasdaqs',
      year: 2005,
      color: 'green',
      status: true,
      buyValue: 12,
      doorsQty: 1,
      seatsQty: 1,
    }];

    sinon.stub(Model, 'find').resolves(carList);
  
    const service = new CarsService();
    const result = await service.getAll();
    expect(result.result).to.be.deep.equal(carList);
  });

  it('Testa se o getAll não encontra nenhum carro', async function () {
    sinon.stub(Model, 'find').resolves([]);
  
    const service = new CarsService();
    const result = await service.getAll();
    expect(result.result).to.be.deep.equal({ message: 'Car not found' });
  });

  it('Testa se o getById encontra o Id', async function () {
    const carOutput: Car = new Car({
      id: '63319d80feb9f483ee823ac5',
      model: 'deasdaqs',
      year: 2005,
      color: 'green',
      status: true,
      buyValue: 12,
      doorsQty: 1,
      seatsQty: 1,
    });

    sinon.stub(Model, 'findById').resolves(carOutput);
  
    const service = new CarsService();
    const result = await service.getById('63319d80feb9f483ee823ac5');
    expect(result.result).to.be.deep.equal(carOutput);
  });

  it('Testa se o getById não encontra o Id', async function () {
    sinon.stub(Model, 'findById').resolves(null);
  
    const service = new CarsService();
    const result = await service.getById('3319d80feb9f483ee823ac5');
    expect(result.result).to.be.deep.equal({ message: 'Invalid mongo id' });
  });
});
