// importing Mongoose
const mongoose = require('mongoose');

// importing Schema form mongoose
const { Schema } = mongoose;

// Creating Schema 
const jobSchema = new Schema({
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
    },
    phone: {
        type: Number,
    },
    email: {
        type: String,
    },
    type: {
        type: String,
    },

});

// Exporting Schema
module.exports = mongoose.model("job", jobSchema);
