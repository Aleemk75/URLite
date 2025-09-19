import mongoose from "mongoose";

const Schema = mongoose.Schema;

let urlSchema = new Schema({
    shortid: {
        type: String,
        required: true,
        unique: true
    },
    longUrl: {
        type: String,
        required: true,
    },
    shortUrl:{
      type: String,
      required: true,
    }
});

const Url = mongoose.model("Url" , urlSchema);

export default Url;