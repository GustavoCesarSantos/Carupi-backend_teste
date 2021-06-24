/* eslint-disable no-return-await */
/* eslint-disable class-methods-use-this */
const carSchema = require('../../../database/schemas/Cars');

class CreateCarDao {
  async create(car) {
    return await carSchema.create(car);
  }
}

module.exports = new CreateCarDao();
