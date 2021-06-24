/* eslint-disable class-methods-use-this */
const createCarDao = require('./CreateCarDao');

class CreateCarService {
  async execute(car) {
    await createCarDao.create(car);
  }
}

module.exports = new CreateCarService();
