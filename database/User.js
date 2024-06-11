import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true  
    }
    ,
    password: {
        type: String,
        required: true
    },
        cpf: {
        type: String,
        required: true
    },
    birthdate: {
        type: String,
        required: true
    },
    uf: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    cep: {
        type: String,
        required: true
    },
    

});

const User = model("User", UserSchema);

export default User;