const { Schema } = require("mongoose");
const { isEmail } = require('validator')

const reservationSchema = new Schema({
    idhotel: {
        type: types.ObjectId,
        required: true,
        trim: true
    },
    userid:{
        type:types.ObjectId,
        required:true
    },
    idroom: {
        type: types.ObjectId,
        required: true,
    },
    checkindate: {
        type: String,
        required: true,
        trim: true

    },
    checkoutdate: {
        type: String,
        required: true,
        validate: [isEmail],
        trim: true
    },
    resdate: {
        Type: String,
        required: true
    }
   

})

const Reservation = model('reservation', reservationSchema);

module.exports = Reservation;