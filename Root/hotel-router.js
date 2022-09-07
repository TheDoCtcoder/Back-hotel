//? ///////////////////////// MISE En PLACE ROOTING Hotel (Router) /////////////////////////




//todo Initialising EXPRESS
//todo _______________________________
const hotelRouter = require('express').Router()
const hotelController = require('../controllers/hotel-controller')


//todo ROOT configuration
//todo ________________________________
// .get    = Recuperation / Afficher
// .post   = Ajout
// .put    = Modification
// .delete = Supression


//* ------methode long (repetition)--------------

hotelRouter.get('/', hotelController.getALL)

hotelRouter.post('/', hotelController.creat)


//todo Exported ROOT
//todo ________________________________
module.exports = hotelRouter