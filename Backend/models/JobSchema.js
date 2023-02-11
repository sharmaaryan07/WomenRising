// importing Mongoose
const mongoose = require('mongoose');

// importing Schema form mongoose
const { Schema } = mongoose;

// Creating Schema 
const jobSchema = new Schema({
    company: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    location: {
        type: String,
        required: true,
    },
    // required: true
    salary: {
        type: Number,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    material:{
        type: String,
    },
    image:{
        type: String,
    }

});

// Exporting Schema
module.exports = mongoose.model("job", jobSchema);
