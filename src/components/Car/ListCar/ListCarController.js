/* eslint-disable class-methods-use-this */
const Car = require('../requestModel/carModel');
const listCarService = require('./ListCarService');

class ListCarController {
  async handle(req, res) {
    try {
      const carModel = new Car({ ...req.params });
  
      await carModel.isAValidCar();
  
      const car = await listCarService.execute(carModel.id);
  
      res.status(200).json(car);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new ListCarController();
