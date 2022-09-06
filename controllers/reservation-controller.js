//? ///////////////////////// CONTROLLERS Reservation /////////////////////////

const { json } = require("express")



//todo imported MODELS (command)
//todo ________________________________
const Reservation = require('../model/reservation.model')
const token = require()



//todo CONTROLLER command configuration
//todo ________________________________
// Operation C.R.U.D
// -----------------
// C = Creat
// R = Read
// U = Update
// D = Delete


const reservationController = {

    getALL: async (req, res) => {

        // Structure FIND
        const reservationFindAll = await Reservation.find()

        res.status(200).json(reservationFindAll)
    },



//* ------------------------------------------------------

    getById: async (req, res) => {

        const id = req.params.id

        // Structure FIND
        const reservationFindOne = await Reservation.findById(id)

        if (!Reservation) {
            return res.sendStatus(404)
        }
        res.status(200).json(reservationFindOne)

    },



//* ------------------------------------------------------

    create: async (req, res) => {

        const reservationADD = Reservation(req.body)

        await reservationADD.save()

        res.status(200).json(reservationADD)
    },



//* ------------------------------------------------------

    update: async (req, res) => {
        const id = req.params.id 

        const reservationUpdate = await Reservation.findByIdAndUpdate(id,
            
                // STRUCTURE
                {
                    name: req.body.name
                },

                // OPTION
                {
                    returnDocument: 'after'
                }
            
            )
            if (reservationUpdate) {
                res.status(200).json(reservationUpdate)
            }
            return res.sendStatus(404)
    },



//* ------------------------------------------------------

    delete: async (req, res) => {
        const id = req.params.id 

        const reservationToDelete = await Reservation.findByIdAndDelete(id)

        if (reservationToDelete) {
            res.sendStatus(204)
        }
        return res.sendStatus(404)

    }
}



//todo Exported CONTROLLER
//todo ________________________________
module.exports = reservationController