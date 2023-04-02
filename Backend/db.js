const mongoose = require('mongoose');

// MongoDB connection String
mongoURL = 'mongodb://localhost:27017/WomensRisingDB?directConnection=true&tls=false&readPreference=primary';

// Connecting to MongoDB
const mongoconnect = () => {
    mongoose.connect(mongoURL, () => {
        console.log("MongoDB Connected!!");
    });
};

module.exports = mongoconnect;