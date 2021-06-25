/* eslint-disable class-methods-use-this */
const carSchema = require('../../../database/schemas/Cars');

class UpdateCarDao {
  async update(car) {
    await carSchema.findByIdAndUpdate(car.id, car, { new: true });
  }
}

module.exports = new UpdateCarDao();
