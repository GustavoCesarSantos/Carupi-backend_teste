require('dotenv').config();
const mongoose = require('mongoose');

const createCarDao = require('../../CreateCar/CreateCarDao');
const listCarDao = require('../../ListCar/ListCarDao');
const updateCarDao = require('../UpdateCarDao');

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  user: process.env.DBUSER,
  pass: process.env.DBPASSWORD,
};

describe('Update car test unit', () => {
  beforeAll(async () => {
    mongoose.connect(process.env.DATABASE_TEST, options);
  });

  afterAll(async () => {
    await mongoose.connection.collection('cars').deleteMany();
    await mongoose.disconnect();
  });

  it('Should not update when passed a invalid identification', async () => {
    await expect(updateCarDao.update({ id: 11111, make: 1111 })).rejects.toThrow();
  });

  it('Should not update when not passed a identification for a car and fields do update', async () => {
    await expect(updateCarDao.update()).rejects.toThrow();
  });

  it('Should update fields by car identificated', async () => {
    const mockCar = {
      _id: mongoose.Types.ObjectId(),
      make: 'xpto',
      model: 'xpto',
      version: 'xpto',
      year: 1999,
      mileage: 10,
      car_shift: 'xpto',
      sale_price: 12.50,
    };

    await createCarDao.create(mockCar);

    const infoToUpdate = {
      id: mockCar._id,
      make: 'xpto1',
    };

    await updateCarDao.update(infoToUpdate);

    const listedCar = await listCarDao.list(mockCar._id);

    expect(listedCar.make).toBe(infoToUpdate.make);
  });
});
