//? ///////////////////////// MIDDLEWARE BODY Validator (VALIDATOR) /////////////////////////


//todo IMPORTATION Mongoose
//todo _____________________________________
const mongoose = require('mongoose')



//todo STRUCTURE Function (Verification et validation des Models)
//todo _____________________________________
const bodyValidator = (isValidator) => {
    return async (req, res, next) => {

        try {
            const valideData = await isValidator.noUnKnown().valideData(req.body, {abortEarly: false})
            req.body = valideData
            next()
        }
        catch (e) {
            res.sendStatus(400)
        }
    }
}



//todo EXPORTE BODY Validator
//todo _____________________________________
module.exports = bodyValidator