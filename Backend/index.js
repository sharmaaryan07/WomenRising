const mongoconnect=require('./db');

// conecting express
const express = require('express')

mongoconnect();

const app = express()
const port = 3000


// Available Routes
app.use('/api/sell', require('./routes/product'))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})