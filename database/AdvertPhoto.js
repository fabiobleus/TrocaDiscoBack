import { Schema, model } from "mongoose";

const AdvertPhotoSchema = new Schema({
   idAdvert: {
       type: String,
       required: true   
   },
   fileName: {
       type: String,
       required: true
   }
});

const User = model("AdvertPhoto", AdvertPhotoSchema);

export default AdvertPhoto;