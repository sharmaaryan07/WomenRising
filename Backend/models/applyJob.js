// importing Mongoose
const mongoose = require('mongoose');

// importing Schema form mongoose
const { Schema } = mongoose;

// Creating Schema 
const applyJobSchema = new Schema({
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
});

const jobApplication = mongoose.model("applyJob", applyJobSchema);
// Exporting Schema
module.exports = jobApplication;