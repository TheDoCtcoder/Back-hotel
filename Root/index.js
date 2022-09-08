
const hotelRouter = require('./hotel-router');
const loginRouter = require('./login-router');
const RoomRouter = require('./room-router');


const router = require('express').Router();

router.use('/auth',loginRouter);
router.use('/hotel',hotelRouter);
router.use('/room',RoomRouter);

module.exports = router;