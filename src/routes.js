const { Router } = require('express');

const router = Router();

const createCarController = require('./components/Car/CreateCar/CreateCarController');

router.post('/cars', createCarController.handle);

module.exports = { router };
