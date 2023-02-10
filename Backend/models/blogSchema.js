// importing Mongoose
const mongoose = require('mongoose');

// importing Schema form mongoose
const { Schema } = mongoose;

// Creating Schema 
const blogSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const blog = mongoose.model("blog", blogSchema);
// Exporting Schema
module.exports = blog;