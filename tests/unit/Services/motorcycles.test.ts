import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcyclesService from '../../../src/Services/MotorcyclesService';
import Motorcycles from '../../../src/Domains/Motorcycle';

describe('Testa o MotorcyclesService', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Valida se consegue cadastrar uma moto', async function () {
    const motoInput: IMotorcycle = {
      model: 'deasdaqs',
      year: 2005,
      color: 'green',
      status: true,
      buyValue: 12,
      category: '5sakdaskd',
      engineCapacity: 2,
    };

    const motoOutput: Motorcycles = new Motorcycles({
      id: '63319d80feb9f483ee823ac5',
      model: 'deasdaqs',
      year: 2005,
      color: 'green',
      status: true,
      buyValue: 12,
      category: '5sakdaskd',
      engineCapacity: 2,
    });

    sinon.stub(Model, 'create').resolves(motoOutput);
  
    const service = new MotorcyclesService();
    const result = await service.createMoto(motoInput);

    expect(result).to.be.deep.equal(motoOutput);
  });

  it('Testa se getAll retorna todas as motos', async function () {
    const motoList = [{
      id: '63319d80feb9f483ee823ac5',
      model: 'deasdaqs',
      year: 2005,
      color: 'green',
      status: true,
      buyValue: 12,
      category: '5sakdaskd',
      engineCapacity: 2,
    }];

    sinon.stub(Model, 'find').resolves(motoList);
  
    const service = new MotorcyclesService();
    const result = await service.getAll();
    expect(result.result).to.be.deep.equal(motoList);
  });  

  it('Testa se o getById encontra o Id', async function () {
    const motoOutput: Motorcycles = new Motorcycles({
      id: '63319d80feb9f483ee823ac5',
      model: 'deasdaqs',
      year: 2005,
      color: 'green',
      status: true,
      buyValue: 12,
      category: '5sakdaskd',
      engineCapacity: 2,
    });

    sinon.stub(Model, 'findById').resolves(motoOutput);
  
    const service = new MotorcyclesService();
    const result = await service.getById('63319d80feb9f483ee823ac5');
    expect(result.result).to.be.deep.equal(motoOutput);
  });

  it('Testa se o getById não encontra o Id', async function () {
    sinon.stub(Model, 'findById').resolves(null);
  
    const service = new MotorcyclesService();
    const result = await service.getById('3319d80feb9f483ee823ac5');
    expect(result.result).to.be.deep.equal({ message: 'Motorcycle not found' });
  });
});
