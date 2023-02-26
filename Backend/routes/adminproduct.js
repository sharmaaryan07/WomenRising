// importing Express 
const express = require('express')
const adminproductSchema = require('../models/adminproductSchema')

// importing Router form Express
const router = express.Router();

// Fetching Products
router.get('/fetchadminproduct', async (req, res) => {
    const fetchProduct = await adminproductSchema.find({ user: req.user });
    res.json(fetchProduct);

})


// Creating Routes for selling product '/api/sell'
router.post('/addadminproduct', (req, res) => {

    const sellproduct = adminproductSchema(req.body)
    sellproduct.save();
    res.send(req.body)

})


// Route 3: To get Perticular Product Details
router.get('/getadminproduct/:id', async (req, res) => {

    try {

        const product = await adminproductSchema.findById(req.params.id);
        res.json(product);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Internal Server Error Occured!!")
    }
});


router.delete('/deleteadminproduct/:id', async (req, res) => {

    try {

        const deletejob = await adminproductSchema.findById(req.params.id);
        if (!deletejob) {
            return res.status(404).send("Not Found")
        }

        const remove = await adminproductSchema.findByIdAndDelete(req.params.id)
        res.send(remove);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Internal Server Error Occured!!")
    }
});

// Exporting Router
module.exports = router