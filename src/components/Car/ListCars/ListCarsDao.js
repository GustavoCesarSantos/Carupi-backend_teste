/* eslint-disable class-methods-use-this */
const carSchema = require('../../../database/schemas/Cars');

class ListCarsDao {
  async lists() {
    return await carSchema.find();
  }
}

module.exports = new ListCarsDao();
