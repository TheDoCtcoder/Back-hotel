const {isEmail, isMobilePhone} = require ('validator')
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
        enum: ['Belgique', 'Italie','France','Allemagne','Pays-Bas'],
        required: true,
    },
    phone:{
        type: String,
        required: true,
        // validate:[isMobilePhone],
        // validate:[isMobilePhone('fr-BE','fr-FR','it-IT','de-DE','nl-NL')],
        trim: true,
        validate: {
            validator: value => isMobilePhone(value, 'fr-BE','fr-FR','it-IT','de-DE','nl-NL'),
            message: props => "Le format du téléphone est mauvais"
        },

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