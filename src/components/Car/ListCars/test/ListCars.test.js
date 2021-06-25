require('dotenv').config();
const mongoose = require('mongoose');

const createCarDao = require('../../CreateCar/CreateCarDao');
const listCarsDao = require('../ListCarsDao');
const QueryFormatter = require('../../../../helpers/queryFormatter');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const mockCar = {
  make: 'xpto1',
  model: 'xpto',
  version: 'xpto',
  year: 2000,
  mileage: 10,
  car_shift: 'xpto',
  sale_price: 12,
};

const mockCar2 = {
  make: 'xpto2',
  model: 'xpto',
  version: 'xpto',
  year: 3000,
  mileage: 10,
  car_shift: 'xpto',
  sale_price: 22,
};

describe('List cars test unit', () => {
  beforeAll(async () => {
    mongoose.connect(process.env.DATABASE_TEST, options);

    const idMockCar = mongoose.Types.ObjectId();
    const idMockCar2 = mongoose.Types.ObjectId();

    mockCar._id = idMockCar;
    mockCar2._id = idMockCar2;

    await createCarDao.create(mockCar);
    await createCarDao.create(mockCar2);
  });

  afterAll(async () => {
    await mongoose.connection.collection('cars').deleteMany();
    await mongoose.disconnect();
  });

  it('Should list all the cars without query filters', async () => {
    const listedCars = await listCarsDao.lists();

    expect(listedCars).not.toBe([]);
  });

  it('Should list all cars that fit the filter entered', async () => {
    const queryFormatter = new QueryFormatter({ make: 'xpto1' });
    const query = queryFormatter.returnAFormattedQuery();

    const listedCars = await listCarsDao.lists(query);

    expect(listedCars[0].make).toBe(mockCar.make);
  });

  it('Should list all cars that fit into the reported years range', async () => {
    const queryFormatter = new QueryFormatter({ yearGte: 2000, yearLte: 4000 });
    const query = queryFormatter.returnAFormattedQuery();

    const listedCars = await listCarsDao.lists(query);

    expect(listedCars).not.toBe([]);
  });

  it('Should list all cars that fit into the reported sale price range', async () => {
    const queryFormatter = new QueryFormatter({ sale_priceGte: 22, sale_priceLte: 22 });
    const query = queryFormatter.returnAFormattedQuery();

    const listedCars = await listCarsDao.lists(query);

    expect(listedCars).not.toBe([]);
  });
});
