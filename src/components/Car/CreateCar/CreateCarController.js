/* eslint-disable class-methods-use-this */
const Car = require('../requestModel/carModel');
const createCarService = require('./CreateCarService');

class CreateCarController {
  async handle(req, res) {
    try {
      const carModel = new Car({ ...req.body });
  
      await carModel.isAValidCar();
  
      await createCarService.execute(carModel);
  
      res.status(201).end();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new CreateCarController();
