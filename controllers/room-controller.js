//? ///////////////////////// CONTROLLERS Chambre /////////////////////////
const { json } = require("express")



//todo imported MODELS (command)
//todo ________________________________
const Room = require('../model/room-model')



//todo CONTROLLER command configuration
//todo ________________________________
// Operation C.R.U.D
// -----------------
// C = Creat
// R = Read
// U = Update
// D = Delete


const roomController = {

    getALL: async (req, res) => {

        // Structure FIND
        const roomFindAll = await Room.find()

        res.status(200).json(roomFindAll)
    },



//* ------------------------------------------------------

    getById: async (req, res) => {

        const id = req.params.id

        // Structure FIND
        const roomFindOne = await Room.findById(id)

        if (!Room) {
            return res.sendStatus(404)
        }
        res.status(200).json(roomFindOne)

    },


//* ------------------------------------------------------

    create: async (req, res) => {

        const roomADD = Room(req.body)

        await roomADD.save()

        res.status(200).json(roomADD)
    },



//* ------------------------------------------------------

    update: async (req, res) => {
        const id = req.params.id 

        const roomUpdate = await Room.findByIdAndUpdate(id,
            
                // STRUCTURE
                {
                    name: req.body.name
                },

                // OPTION
                {
                    returnDocument: 'after'
                }
            
            )
            if (roomUpdate) {
                res.status(200).json(roomUpdate)
            }
            return res.sendStatus(404)
    },



//* ------------------------------------------------------

    delete: async (req, res) => {
        const id = req.params.id 

        const roomToDelete = await Room.findByIdAndDelete(id)

        if (roomToDelete) {
            res.sendStatus(204)
        }
        return res.sendStatus(404)

    }
}



//todo Exported CONTROLLER
//todo ________________________________
module.exports = roomController