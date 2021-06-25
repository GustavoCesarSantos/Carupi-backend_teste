require('dotenv').config();
const mongoose = require('mongoose');

const createCarDao = require('../../CreateCar/CreateCarDao');
const listCarDao = require('../ListCarDao');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  user: process.env.DBUSER,
  pass: process.env.DBPASSWORD,
};

describe('List car test unit', () => {
  beforeAll(async () => {
    mongoose.connect(process.env.DATABASE_TEST, options);
  });

  afterAll(async () => {
    await mongoose.connection.collection('cars').deleteMany();
    await mongoose.disconnect();
  });

  it('Should not list when passed a invalid identification', async () => {
    await expect(listCarDao.list('xpto')).rejects.toThrow();
  });

  it('Should not list when not passed a identification for a car', async () => {
    await expect(listCarDao.list()).rejects.toThrow();
  });

  it('Should list the specific car when passed valid identification', async () => {
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

    const listedCar = await listCarDao.list(mockCar._id);

    expect(listedCar).toBeInstanceOf(Object);
  });
});
