const {isEmail} = require ('validator')
const { Schema , model} = require("mongoose");



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
        maxlength: 500,
        trim: true
    },
    role: {
        type: String,
        trim: true, 
        enum: ['Client','Admin','Receptionnist'],
        default:"Client"
    }
    
},{
    collection: "User",
    timestamps:true
});

const User = model("User", userSchema);

module.exports = User;