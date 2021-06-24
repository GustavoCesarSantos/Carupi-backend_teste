/* eslint-disable class-methods-use-this */
const updateCarService = require('./UpdateCarService');

class UpdateCarController {
  async handle(req, res) {
    const car = { ...req.body, ...req.params };

    await updateCarService.execute(car);

    res.status(204).end();
  }
}

module.exports = new UpdateCarController();
