
const {isMobilePhone} = require ('validator')
const validator = require('validator');



const phonevalidator = () => {
return (req, res, next) => {
    const phone = req.body.phone;
    console.log(phone)
    if( (!validator.isMobilePhone(phone,'fr-BE','fr-FR','it-IT','de-DE','nl-NL')))
    {
        res.status(400).json({erreur : "Numéro de téléphone non Valide !!!"});
        return;
    }
    next();
}
}

module.exports = phonevalidator;