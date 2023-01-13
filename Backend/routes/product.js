// importing Express 
const express = require('express')

// importing Router form Express
const router = express.Router();

// Creating Routes
router.get('/', (req, res)=>{
    obj={
        name: "Saree",
        description: "Made a Saree",
        price: 300,
    }
    res.json(obj)
    
})

// Exporting Router
module.exports = router