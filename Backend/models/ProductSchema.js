// importing Mongoose
const mongoose = require('mongoose');

// importing Schema form mongoose
const { Schema } = mongoose;

// Creating Schema 
const sellSchema = new Schema({
    name: { 
        type: String, 
        required: true, 
    },
    title: { 
        type: String, 
        required: true, 
    },
    // required: true
    description: { 
        type: String, 
    },
    price: { 
        type: Number, 
    },
    phone: { 
        type: Number, 
    },
    email: { 
        type: String, 
    },
    image: {
        type: String,
      },
});

// Exporting Schema
module.exports=mongoose.model("sell", sellSchema);
