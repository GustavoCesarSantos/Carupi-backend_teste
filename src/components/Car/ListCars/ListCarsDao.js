/* eslint-disable class-methods-use-this */
const carSchema = require('../../../database/schemas/Cars');

class ListCarsDao {
  async lists(query) {
    return carSchema.find(query);
  }
}

module.exports = new ListCarsDao();
