const { Schema } = require("mongoose");
const {isEmail, isMobilePhone} = require ('validator')

const hotelSchema = new Schema({
    name:{
        type: String,
        required:true,
        trim:true
    },
    star:{
        type: Number,
        required: true,
    },
    adresse:{
        cp:{
            type: String,
            required: true,
        },
        num:{
            type: String,
            required: true,
        },
        street:{
            type:String,
            required:true,
            trim:true,
        },
        country:{
            type:[String],
            required:true,
            enum:['Belgique', ' Italie',' France',' Allemagne',' Pays-Bas']
        },


        required:true,
        trim:true
    },
    tel:{
        type: String,
        validate:[isMobilePhone(['fr-BE','fr-FR','it-IT','de-DE','nl-NL'])],
        required:true,
        trim:true

    },
    email:{
        type:String,
        required:true,
        validate:[isEmail],
        trim:true
    },
    room:{
        type:String,
        required: true,

    },
    pool:{
        Type:[String],
        enum:['Oui','Non'],
        required:true
    },
    valet:{
        type:[String],
        enum:['Oui', 'Non'],
        required:true
    },
    roomservice:{
        type:[String],
        enum:['Oui', 'Non'],
        required:true
    }

})

const Hotel = model('Hotel', hotelSchema);

module.exports = Hotel;