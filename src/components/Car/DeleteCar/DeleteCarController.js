/* eslint-disable class-methods-use-this */
const deleteCarService = require('./DeleteCarService');

class DeleteCarController {
  async handle(req, res) {
    const { id } = req.params;

    await deleteCarService.execute(id);

    res.status(204).end();
  }
}

module.exports = new DeleteCarController();
