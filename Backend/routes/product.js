// importing Express 
const express = require('express')
const sellProduct =require('../models/Sell')

// importing Router form Express
const router = express.Router();

// Creating Routes for selling product '/api/sell'
router.post('/update', (req, res)=>{
    
    const sellproduct= sellProduct(req.body)
    sellproduct.save();
    res.send(req.body)
    
})

// Exporting Router
module.exports = router