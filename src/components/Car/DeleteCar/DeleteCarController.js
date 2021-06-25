/* eslint-disable class-methods-use-this */
const Car = require('../requestModel/carModel');
const deleteCarService = require('./DeleteCarService');

class DeleteCarController {
  async handle(req, res) {
    const carModel = new Car({ ...req.params });

    await carModel.isAValidCar();

    await deleteCarService.execute(carModel.id);

    res.status(204).end();
  }
}

module.exports = new DeleteCarController();
