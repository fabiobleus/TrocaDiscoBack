import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
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
    photo: {
        type: Array,
        required: true
    },
   
    status: {
        type: String,
        required: true
    }
    

});

const Product = model("Product", ProductSchema);

export default Product;