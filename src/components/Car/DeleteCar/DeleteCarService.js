/* eslint-disable class-methods-use-this */
const deleteCarDao = require('./DeleteCarDao');

class DeleteCarService {
  async execute(carId) {
    await deleteCarDao.delete(carId);
  }
}

module.exports = new DeleteCarService();
