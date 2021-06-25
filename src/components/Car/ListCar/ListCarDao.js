/* eslint-disable class-methods-use-this */
const carSchema = require('../../../database/schemas/Cars');

class ListCarDao {
  async list(carId) {
    return carSchema.findById({ _id: carId });
  }
}

module.exports = new ListCarDao();
