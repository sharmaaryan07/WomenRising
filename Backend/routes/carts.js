// importing Express 
const express = require('express');
const fetchuser = require('../middleware/fetchuser');
const cartProduct =require('../models/cartSchema')

// importing Router form Express
const router = express.Router();

//Route 2: Fetching Products of carts
router.get('/fetchcart', fetchuser ,async (req, res)=>{
    const fetchCart= await cartProduct.find({user: req.user.id});
    res.json(fetchCart);
    
})


//Route 1: Creating Routes for add cart product 
router.post('/addtocart', fetchuser ,(req, res)=>{
    let success= true;
    const {title,price, image}= req.body;

    const addcart= new cartProduct({
        title, price, image, user: req.user.id
    })
    addcart.save();
    res.send( req.body)
    
})


// Route 2: To get Perticular Product Details
router.get('/getproduct/:id',async (req, res) => {

    try {
        
        const product = await sellProduct.findById(req.params.id);
        res.json(product);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Internal Server Error Occured!!")
    }
});


// Route 3: To get Delete Product Details
router.delete('/deletecart/:id', fetchuser, async (req, res) => {

    try {

        const product = await cartProduct.findById(req.params.id);
        if (!product) {
            return res.status(404).send("Not Found")
        }

        // Allow deletion only if user owns this product
        if (product.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }

        note = await cartProduct.findByIdAndDelete(req.params.id)
        res.send(note);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Internal Server Error Occured!!")
    }
});


// Exporting Router
module.exports = router