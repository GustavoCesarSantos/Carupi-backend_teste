const carSchema = require('../../../database/schemas/Cars');

class DeleteCarDao {
  async delete(carId) {
    await carSchema.findByIdAndDelete({ _id: carId });
  }
}

module.exports = new DeleteCarDao();
