const mongoconnect=require('./db');

// conecting express
const express = require('express')
// imported cors
var cors = require('cors')

mongoconnect();

const app = express()
const port = 5000

// Use Cors
app.use(cors())
// Using Middleware
app.use(express.json());

// Available Routes
app.use('/api/sell', require('./routes/product'))
app.use('/api/auth', require('./routes/auth'))

app.listen(port, () => {
  console.log(`WomensRising backend app listening on port http://localhost:${port}`)
})