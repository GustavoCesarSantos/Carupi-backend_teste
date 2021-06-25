/* eslint-disable class-methods-use-this */
const Car = require('../requestModel/carModel');
const createCarService = require('./CreateCarService');

class CreateCarController {
  async handle(req, res) {
    const carModel = new Car({ ...req.body });

    await carModel.isAValidCar();

    await createCarService.execute(carModel);

    res.status(201).end();
  }
}

module.exports = new CreateCarController();
