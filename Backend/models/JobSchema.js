// importing Mongoose
const mongoose = require('mongoose');

// importing Schema form mongoose
const { Schema } = mongoose;

// Creating Schema 
const jobSchema = new Schema({
    ownername: {
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
    materialImg: {
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
        address: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        phone: {
            type: Number,
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
