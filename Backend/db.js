const mongoose = require('mongoose');

mongoURL = 'mongodb://localhost:27017/WomensRisingDB?directConnection=true&tls=false&readPreference=primary';

const mongoconnect = () => {
    mongoose.connect(mongoURL, () => {
        console.log("MongoDB Connected!!");
    });
};

module.exports = mongoconnect;