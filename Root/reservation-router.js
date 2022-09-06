

const reservationRouter = require("express").Router();

reservationRouter.route('/')
    .get(authentication(), reservationController.getAll) 
    .post(authentication(), reservationController.create) 
reservationRouter.route('/:id')
    .get(authentication(), idValidator(), reservationController.getById)
    .put(authentication(), idValidator(), reservationController.update)
    .delete(authentication(["Admin"]), idValidator(), reservationController.delete)
reservationRouter.route('/user/:id')
    .get(authentication(), reservationController.getByUser)

module.exports = reservationRouter;