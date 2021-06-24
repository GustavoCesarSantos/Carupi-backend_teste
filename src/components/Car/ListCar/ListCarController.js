/* eslint-disable class-methods-use-this */
const listCarService = require('./ListCarService');

class ListCarController {
  async handle(req, res) {
    const { id } = req.params;
    const car = await listCarService.execute(id);
    res.status(200).json(car);
  }
}

module.exports = new ListCarController();
