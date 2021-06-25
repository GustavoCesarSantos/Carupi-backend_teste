/* eslint-disable class-methods-use-this */
const Car = require('../requestModel/carModel');
const listCarService = require('./ListCarService');

class ListCarController {
  async handle(req, res) {
    const carModel = new Car({ ...req.params });

    await carModel.isAValidCar();

    const car = await listCarService.execute(carModel.id);

    res.status(200).json(car);
  }
}

module.exports = new ListCarController();
