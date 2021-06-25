require('dotenv').config();
const mongoose = require('mongoose');

const createCarDao = require('../CreateCarDao');
const listCarDao = require('../../ListCar/ListCarDao');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  user: process.env.DBUSER,
  pass: process.env.DBPASSWORD,
};

describe('Create car test unit', () => {
  beforeAll(async () => {
    mongoose.connect(process.env.DATABASE_TEST, options);
  });

  afterAll(async () => {
    await mongoose.connection.collection('cars').deleteMany();
    await mongoose.disconnect();
  });

  it('Should not persist in base when passed undefined in required info(s)', async () => {
    const mockCar = {
      make: undefined,
      model: 'XPTO',
      version: 'XPTO',
      year: 1999,
      mileage: 10,
      car_shift: 'XPTO',
      sale_price: 12.50,
    };

    await expect(createCarDao.create(mockCar)).rejects.toThrow();
  });

  it('Should not persist in base when not passed a required info(s)', async () => {
    const mockCar = {};

    await expect(createCarDao.create(mockCar)).rejects.toThrow();
  });

  it('Should persist in base a valid car when passed valid infos', async () => {
    const idMockCar = mongoose.Types.ObjectId();

    const mockCar = {
      _id: idMockCar,
      make: 'xpto',
      model: 'xpto',
      version: 'xpto',
      year: 1999,
      mileage: 10,
      car_shift: 'xpto',
      sale_price: 12.50,
    };

    await createCarDao.create(mockCar);

    const listedCar = await listCarDao.list(idMockCar);

    expect(listedCar).toBeInstanceOf(Object);
  });
});
