require('dotenv').config();
const mongoose = require('mongoose');

const createCarDao = require('../../CreateCar/CreateCarDao');
const deleteCarDao = require('../DeleteCarDao');
const listCarDao = require('../../ListCar/ListCarDao');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

describe('Delete car test unit', () => {
  beforeAll(async () => {
    mongoose.connect(process.env.DATABASE_TEST, options);
  });

  afterAll(async () => {
    await mongoose.connection.collection('cars').deleteMany();
    await mongoose.disconnect();
  });

  it('Should not delete when passed a invalid identification', async () => {
    await expect(deleteCarDao.delete('xpto')).rejects.toThrow();
  });

  it('Should not delete when not passed a identification for a car', async () => {
    await expect(deleteCarDao.delete()).rejects.toThrow();
  });

  it('Should delete the specific car when passed valid identification', async () => {
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

    await deleteCarDao.delete(mockCar._id);

    const listedCar = await listCarDao.list(mockCar._id);

    expect(listedCar).not.toBeInstanceOf(Object);
  });
});
