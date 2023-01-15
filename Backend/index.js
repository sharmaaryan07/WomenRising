const mongoconnect=require('./db');

// conecting express
const express = require('express')

mongoconnect();

const app = express()
const port = 5000

// Using Middleware
app.use(express.json());

// Available Routes
app.use('/api/sell', require('./routes/product'))

app.listen(port, () => {
  console.log(`WomensRising backend app listening on port http://localhost:${port}`)
})