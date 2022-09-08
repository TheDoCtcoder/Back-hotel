const RoomController =  require ('../controllers/room-controller.js')

const RoomRouter =  require('express').Router();

RoomRouter.post('/', RoomController.create)
RoomRouter.get('/', RoomController.getALL)




module.exports =  RoomRouter;