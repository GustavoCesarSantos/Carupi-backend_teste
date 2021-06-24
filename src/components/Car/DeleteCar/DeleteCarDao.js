const carSchema = require('../../../database/schemas/Cars');

class DeleteCarDao {
  async delete(carId) {
    return await carSchema.findByIdAndDelete(carId);
  }
}

module.exports = new DeleteCarDao();
