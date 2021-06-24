/* eslint-disable class-methods-use-this */
const updateCarDao = require('./UpdateCarDao');

class UpdateCarService {
  async execute(car) {
    await updateCarDao.update(car);
  }
}

module.exports = new UpdateCarService();
