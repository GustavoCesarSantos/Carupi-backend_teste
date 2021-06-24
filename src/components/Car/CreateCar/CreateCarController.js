/* eslint-disable class-methods-use-this */
const createCarService = require('./CreateCarService');

class CreateCarController {
  async handle(req, res) {
    const car = req.body;
    await createCarService.execute(car);
    res.status(201).end();
  }
}

module.exports = new CreateCarController();
