// importing Mongoose
const mongoose = require('mongoose');

// importing Schema form mongoose
const { Schema } = mongoose;

// Creating Schema 
const userSchema = new Schema({
    name: { 
        type: String, 
        required: true, 
    },
    email: { 
        type: String, 
        required: true, 
    },
    passward: { 
        type: String, 
        required: true, 
    },
});

// Exporting Schema
module.exports=mongoose.model("user", userSchema);
