/* eslint-disable class-methods-use-this */
const listCarsDao = require('./ListCarsDao');

class ListCarsService {
  async execute() {
    await listCarsDao.lists();
  }
}

module.exports = new ListCarsService();
