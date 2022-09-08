const { Schema, Types } = require("mongoose");



const roomSchema = new Schema({

    name: {
        type: String,
        required: true,
        trim:true
    },
    desc: {
        type:String,
        required: true,
        trim: true,
    },

    type:{
        type: String,
        enum: ['Solo', 'Duo','Familly','Suite'],
        required: true,
    },
    capacity:{
        type: Number,
        required: true,
        trim: true,
    },
    balcony: {
        type: String,
        trim: true, 
        enum: ['Oui','Non'],
        required:true
        
    },
    airco:{
        type: String,
        trim: true, 
        enum: ['Oui','Non'],
        required:true
    },
    wifi:{
        type: String,
        trim: true, 
        enum: ['Oui','Non'],
        required:true
    },
    minibar:{
        type: String,
        trim: true, 
        enum: ['Oui','Non'],
        required:true
    },
    animal:{
        type: String,
        trim: true, 
        required:true,
        enum: ['Oui','Non'],
    },
    tv:{
        type: String,
        trim: true, 
        enum: ['Oui','Non'],
        required:true,
    },
    breakfast:{
        type:Number,
        required:true,
    },
    img:{
        type:String,
        required:true,
    },
    idhotel:{
        type: Types.ObjectId,
        required:true,

}
}
,{
    collection: "Room",
    timestamps:true
});
const Room = model('room', roomSchema);

module.exports = Room;