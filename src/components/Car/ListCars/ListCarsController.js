/* eslint-disable class-methods-use-this */
const QueryFormatter = require('../../../helpers/queryFormatter');
const listCarsService = require('./ListCarsService');

class ListCarsController {
  async handle(req, res) {
    try {
      const queryFormatter = new QueryFormatter({ ...req.query });
  
      const query = await queryFormatter.returnAFormattedQuery();
  
      const cars = await listCarsService.execute(query);
  
      res.status(200).json(cars);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new ListCarsController();
