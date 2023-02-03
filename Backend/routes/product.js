// importing Express 
const express = require('express')
const sellProduct =require('../models/ProductSchema')

// importing Router form Express
const router = express.Router();

// Fetching Products
router.get('/fetchproduct', async (req, res)=>{
    const fetchProduct= await sellProduct.find({user: req.user});
    res.json(fetchProduct);
    
})


// Creating Routes for selling product '/api/sell'
router.post('/update', (req, res)=>{
    
    const sellproduct= sellProduct(req.body)
    sellproduct.save();
    res.send(req.body)
    
})


// Route 3: To get Perticular Product Details
router.post('/getproduct/:id',async (req, res) => {

    try {
        
        const product = await sellProduct.findById(req.params.id);
        res.json(product);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Internal Server Error Occured!!")
    }
});


// Exporting Router
module.exports = router