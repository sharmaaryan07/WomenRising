// importing Mongoose
const mongoose = require('mongoose');

// importing Schema form mongoose
const { Schema } = mongoose;

// Creating Schema 
const cartSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: { 
        type: String, 
        required: true, 
    },
    price: { 
        type: Number, 
    },
    image: {
        type: String,
    }
});

// Exporting Schema
module.exports=mongoose.model("cart", cartSchema);
