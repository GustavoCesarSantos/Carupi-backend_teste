/* eslint-disable class-methods-use-this */
const listCarsService = require('./ListCarsService');

class ListCarsController {
  async handle(req, res) {
    const cars = await listCarsService.execute();
    res.status(200).json(cars);
  }
}

module.exports = new ListCarsController();
