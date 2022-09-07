//? ///////////////////////// CONTROLLERS Hotel (Admin Manager) /////////////////////////




// todo IMPORTATION Utils
// todo __________________________________
const Hotel = require('../model/hotel.model')


//todo CONTROLLER Authentication configuration
//todo ________________________________
// Operation C.R.U.D
// -----------------
// C = Creat
// R = Read
// U = Update
// D = Delete


const hotelController = {


    getALL: async (req, res) => {

        // Structure FIND
        const hotelFindAll = await Hotel.find()

        res.status(200).json(hotelFindAll)
    },



    //* ------------------------------------------------------

    getById: async (req, res) => {


        const id = req.params.id

        // Structure FIND
        const hotelFindOne = await Hotel.findById(id)

        if (!Hotel) {
            return res.sendStatus(404)
        }

        res.status(200).json(hotelFindOne)
    },



    //* ------------------------------------------------------


    create: async (req, res) => {

        const hotelADD = Hotel(req.body)

        await hotelADD.save()
        res.status(200).json(hotelADD)
    },



    //* ------------------------------------------------------

    update: async (req, res) => {

        const id = req.params.id

        const hotelUpdate = await Hotel.findByIdAndUpdate(id,

            // STRUCTURE
            {
                name: req.body.name,
                star: req.body.star,

                adress: {
                    cp: req.body.cp,
                    num: req.body.num,
                    street: req.body.street,
                    country: req.body.country
                },

                tel: req.body.tel,
                email: req.body.email,
                room: req.body.room,
                pool: req.body.pool,
                valet: req.body.valet,
                roomservice: req.body.roomservice
            },

            // OPTION
            {
                returnDocument: 'after'
            }
        )

        if (hotelUpdate) {
            res.status(200).json(hotelUpdate)
        }

        return res.sendStatus(404)

    },



    //* ------------------------------------------------------

    delete: async (req, res) => {

        const id = req.params.id

        const hotelToDelete = await Hotel.findByIdAndDelete(id)

        if (!hotelToDelete) {

            return res.sendStatus(404)
        }
        res.sendStatus(204)
    }

}




//todo Exported CONTROLLER
//todo ________________________________
module.exports = hotelController