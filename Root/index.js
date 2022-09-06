
const loginRouter = require('./login-router');

const router = require('express').Router();

router.use('/auth',loginRouter);

module.exports = router;