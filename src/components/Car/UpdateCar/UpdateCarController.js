/* eslint-disable class-methods-use-this */
const Car = require('../requestModel/carModel');
const updateCarService = require('./UpdateCarService');

class UpdateCarController {
  async handle(req, res) {
    try {
      const carModel = new Car({ ...req.body, ...req.params });
  
      await carModel.isAValidCar();
  
      await updateCarService.execute(carModel);
  
      res.status(204).end();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new UpdateCarController();
