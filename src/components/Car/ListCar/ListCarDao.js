/* eslint-disable class-methods-use-this */
const carSchema = require('../../../database/schemas/Cars');

class ListCarDao {
  async list(carId) {
    return await carSchema.findById(carId);
  }
}

module.exports = new ListCarDao();
