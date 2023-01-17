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

    // required: true
    image: { 
        type: String,
    },
    
    description: { 
        type: String, 
        required: true 
    },

    price: { 
        type: Number, 
        required: true 
    },

    phone: { 
        type: Number, 
    },
});

// Exporting Schema
module.exports=mongoose.model("sell", sellSchema);
