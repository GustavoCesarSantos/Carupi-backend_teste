/* eslint-disable class-methods-use-this */
const listCarsDao = require('./ListCarsDao');

class ListCarsService {
  async execute(query) {
    return listCarsDao.lists(query);
  }
}

module.exports = new ListCarsService();
