const HotelController = require('../controllers/hotel-controller')

const hotelRouter = require('express').Router();

hotelRouter.post('/', HotelController.create)
hotelRouter.get('/', HotelController.getALL)

module.exports = hotelRouter