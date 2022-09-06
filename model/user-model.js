const {isEmail} = require ('validator')
const { Schema } = require("mongoose");



const userSchema = new Schema({

    lastname: {
        type: String,
        required: true,
        trim:true
    },
    firstname: {
        type:String,
        required: true,
        trim: true,
    },
    mail:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: [isEmail]
    },
    country:{
        type: String,
        enum: ['Belgique', ' Italie',' France',' Allemagne',' Pays-Bas'],
        required: true,
    },
    phone:{
        type: Number,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 15,
        trim: true
    },
    role: {
        type: String,
        trim: true, 
        enum: ['Client','Admin','Receptionnist'],
        default:"Client"
    }
    

})

const User = model('User', userSchema);

module.exports = User;