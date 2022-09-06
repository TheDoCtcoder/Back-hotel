//? ///////////////////////// MISE En PLACE ROOTING Room (Router) /////////////////////////




//todo Initialising EXPRESS
//todo _______________________________
const roomRouter = require('express').Router()
const roomController = require('../Controllers/room-controller')




//todo ROOT configuration
//todo ________________________________
// .get    = Recuperation / Afficher
// .post   = Ajout
// .put    = Modification
// .delete = Supression


//* ------methode long (repetition)--------------

roomRouter.get('/', roomController.getALL)

roomRouter.get('/:id', idValidator(), roomController.getById)

roomRouter.put('/:id', authentication(['Admin']), idValidator(), roomController.update)

roomRouter.post('/', authentication(['Admin']), roomController.creat)

roomRouter.delete('/:id', authentication(['Admin']), idValidator(), roomController.delete)


//todo Exported ROOT
//todo ________________________________
module.exports = roomRouter