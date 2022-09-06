const loginController = require("../controllers/login-controller");
const phoneValidator = require('../middlewares/phoneValidator')
const loginRouter = require('express').Router();


loginRouter.post('/login', loginController.login);
loginRouter.post('/register', phoneValidator(), loginController.register);

module.exports = loginRouter;
