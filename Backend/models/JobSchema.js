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
        type: String,
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
    material: {
        type: String,
    },
    image: {
        type: String,
    },
    applications: [{
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        resume: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now,
        },
    }],

});

// Exporting Schema
module.exports = mongoose.model("job", jobSchema);
