//? ///////////////////////// CONTROLLERS clients /////////////////////////



//todo imported DTO
//todo ________________________________
const clientDTO = require()




//todo imported MODELS (clients)
//todo ________________________________
const Client = require('../model/user-model')



//todo FUNCTION Mappage CLIENT
//todo _________________________________
const clientMapToDTO = (client) => new clientDTO()




//todo CONTROLLER Client configuration
//todo ________________________________
// Operation C.R.U.D
// -----------------
// C = Creat
// R = Read
// U = Update
// D = Delete


const clientController = {


    getALL: async (req, res) => {

        // Structur Find
        const clientALL = await Client.find()

        // DTO Conversion
        const clientToDTO = clientALL.map(clientMapToDTO)

        res.status(200).json(clientToDTO)
    },


    getById: async (req, res) => {

        const id = req.params.id 

        // Structure Find
        const clients = await Client.findById(id)

        if (!clients) {
            return res.sendStatus(404)
        }

        // DTO Conversion
        const clienTotDTO = clientMapToDTO(clients)
        res.status(200).json(clienTotDTO)
    },

    update: async (req, res) => {

        const id = req.params.id 

        const clientUpdate = await Client.findByIdAndUpdate(id,
            

            // STRUCTURE
            {
                lastname: req.body.lastname,
                firstname: req.body.firstname,
                mail: req.body.mail,
                country: req.body.country,
                phone: req.body.phone,
                password: req.body.password,
                role: req.body.role
            },

            // OPTION
            {
                returnDocument: 'after'
            }
        )

    },

    delete: async (req, res) => {

        const id = req.params.id 

        const clientToDelete = await Client.findByIdAndDelete(id)

        if (clientToDelete) {
            res.sendStatus(204)
        }

        res.sendStatus(404)
    }

}




//todo Exported CONTROLLER
//todo ________________________________
module.exports = clientController