const mongoose = require("mongoose");

const idValidator = () => {
    return (req, res, next) => {
        //récupèration l'id de la requête
        const id = req.params.id;
        //Si l'id n'est pas un ObjectId valide
        if(!mongoose.isValidObjectId(id))
        {
            //erreur 400
            res.sendStatus(400); //Bad Request => La requête n'est pas bonne
            return;
        }
        //Suite de la requête grâce au next()
        next();
    }
}

//Export du module
module.exports = idValidator;