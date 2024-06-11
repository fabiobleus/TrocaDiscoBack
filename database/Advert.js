import { Schema, model } from "mongoose";

const AdvertSchema = new Schema({
    idUser: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    interest:{
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
   
    Status: {
        type: String,
        required: true
    }
    

});

const User = model("Advert", AdvertSchema);

export default Advert;