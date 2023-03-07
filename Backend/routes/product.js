// importing Express 
const express = require('express')
const sellProduct = require('../models/ProductSchema')
const nodemailer = require("nodemailer");

// importing Router form Express
const router = express.Router();

// Fetching Products
router.get('/fetchproduct', async (req, res) => {
    const fetchProduct = await sellProduct.find({ user: req.user });
    res.json(fetchProduct);

})


// Creating Routes for selling product '/api/sell'
router.post('/update', (req, res) => {

    const sellproduct = sellProduct(req.body)
    sellproduct.save((err) => {
        if (err) {
            console.error('Error saving job posting:', err);
            res.status(500).send('Error saving job posting');
        } else {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                host: "smtp.gmail.com",
                port: 465,
                secure: true,
                auth: {
                    user: 'womenrising89@gmail.com',
                    pass: 'kgjkuowzybvuaozc',
                },
            });
            const mailOptions = {
                from: `${req.body.email}`,
                to: `${req.body.email}`,
                subject: 'Product Accepted.',
                html: `<h2>Your product "${req.body.title}" has been accepted and its displaying in product page .</h2>
                `,
            };
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.error('Error sending email:', err);
                    res.status(500).send('Error sending email');
                } else {
                    console.log('Email sent:', info.response);
                    res.status(200).send('Job application saved successfully');
                }
            });
        }
    });

})


// Route 3: To get Perticular Product Details
router.get('/getproduct/:id', async (req, res) => {

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