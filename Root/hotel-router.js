const HotelController = require('../controllers/hotel-controller')

const hotelRouter = require('express').Router();

hotelRouter.post('/', HotelController.create )

module.exports = hotelRouter