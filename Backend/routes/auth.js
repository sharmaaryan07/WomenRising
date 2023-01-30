const express = require('express')

// Import UserSchema
const User = require('../models/UserSchema')
// Import Express Validation
const { body, validationResult } = require('express-validator');
// importing Router form Express
const router = express.Router();



// create User 
router.post('/createuser', [
    // Using Validation
    body('name', 'Enter Name min 3 character').isLength({ min: 3 }),
    body('email', 'Enter Valid Email ID').isEmail(),
    body('password', 'Enter password min 4 character').isLength({ min: 4 }),

], async (req, res) => {
    // It will send Error if input is not correctly given
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // It will send User Info to MongoDB
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }).then(user => res.json(user))
        .catch(err => {
            console.log(err)
            res.json({
                error: 'Please Enter a valid email',
                message: err.message
            })
        })


})

// Exporting Router
module.exports = router