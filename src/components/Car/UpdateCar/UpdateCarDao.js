/* eslint-disable class-methods-use-this */
const carSchema = require('../../../database/schemas/Cars');

class UpdateCarDao {
  async update(car) {
    return await carSchema.findByIdAndUpdate(car._id, car);
  }
}

module.exports = new UpdateCarDao();
