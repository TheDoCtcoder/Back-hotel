const loginController = require("../controllers/login-controller");
const loginRouter = require('express').Router();

loginRouter.post('/login', loginController.login);
loginRouter.post('/register', loginController.register);

module.exports = loginRouter;
