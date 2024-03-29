const mongoconnect = require('./db');

// conecting express
const express = require('express');
// imported cors
var cors = require('cors');

mongoconnect();

const app = express()
const port = 5000

// Use Cors
app.use(cors());
// Using Middleware
app.use(express.json());


// Available Routes
app.use('/api/job', require('./routes/jobs'))
app.use('/api/sell', require('./routes/product'))
app.use('/api/cart', require('./routes/carts'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/blogs', require('./routes/blogs'))
app.use('/api/admin', require('./routes/admin'))
app.use('/api/adminjob', require('./routes/adminjob'))
app.use('/api/adminproduct', require('./routes/adminproduct'))


app.listen(port, () => {
  console.log(`WomensRising backend app listening on port http://localhost:${port}`)
})