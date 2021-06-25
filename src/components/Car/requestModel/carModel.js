const Joi = require('joi');

const schema = Joi.object({
  id: [Joi.string(), Joi.number()],
  make: [Joi.string(), Joi.required()],
  model: [Joi.string(), Joi.required()],
  version: [Joi.string(), Joi.required()],
  year: [Joi.number(), Joi.required()],
  mileage: [Joi.number(), Joi.required()],
  car_shift: [Joi.string(), Joi.required()],
  sale_price: [Joi.number(), Joi.required()],
});

class Car {
  constructor(car) {
    this.id = car.carId && car.carId;
    this.make = car.make;
    this.model = car.model;
    this.version = car.version;
    this.year = car.year;
    this.mileage = car.mileage;
    this.car_shift = car.car_shift;
    this.sale_price = car.sale_price;
  }

  async isAValidCar() {
    try {
      await schema.validateAsync(this);
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

module.exports = Car;
