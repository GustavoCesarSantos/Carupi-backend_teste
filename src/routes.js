const { Router } = require('express');

const router = Router();

const createCarController = require('./components/Car/CreateCar/CreateCarController');
const listCarsController = require('./components/Car/ListCars/ListCarsController');
const listCarController = require('./components/Car/ListCar/ListCarController');
const updateCarController = require('./components/Car/UpdateCar/UpdateCarController');
const deleteCarController = require('./components/Car/DeleteCar/DeleteCarController');

router.post('/cars', createCarController.handle);
router.get('/cars', listCarsController.handle);
router.get('/cars/:carId', listCarController.handle);
router.put('/cars/:carId', updateCarController.handle);
router.delete('/cars/:carId', deleteCarController.handle);

module.exports = { router };
