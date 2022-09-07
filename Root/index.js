
const hotelRouter = require('./hotel-router');
const loginRouter = require('./login-router');

const router = require('express').Router();

router.use('/auth',loginRouter);
router.use('/hotel',hotelRouter);

module.exports = router;