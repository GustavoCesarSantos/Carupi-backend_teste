/* eslint-disable class-methods-use-this */
const listCarDao = require('./ListCarDao');

class ListCarService {
  async execute(carId) {
    return listCarDao.list(carId);
  }
}

module.exports = new ListCarService();
