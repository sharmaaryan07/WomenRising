const express = require('express')

// Import UserSchema
const User = require('../models/UserSchema')
// Import Express Validation
const { body, validationResult } = require('express-validator');
// Imported bcryptjs
const bcrypt = require('bcryptjs');
// Imported JsonWebToken
const jwt = require('jsonwebtoken');
// importing Router form Express
const router = express.Router();

const jwtSecret = "screctforauthen$ication";




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

    try {

        // Check Whether the user already exists
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: 'User Already Exists!!' })
        }

        // Encrypting Password by doing hashing and salting
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        // Create New User
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        });

        // Generating AuthToken 
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, jwtSecret);

        // It will give OP as authToken
        res.json({ authToken });
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Internal Server Error Occured!!")

    }

})


// Authenticate User---- Login

router.post('/login', [
    // Using Validation
    body('email', 'Enter Valid Email ID').isEmail(),
    body('password', 'Enter password min 4 character').isLength({ min: 4 }),

], async (req, res) => {
    // It will send Error if input is not correctly given
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // If User is not there it will send a error
    const { email, password } = req.body;
    try {

        let user =await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }

        // Comparing password
        //const passwordCompare = bcrypt.compare(it will compare 'password enter by user' , and 'actual users password');
        const passwordCompare =await bcrypt.compare(password, user.password);
        if(!passwordCompare){
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }

        // It will send Data 
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, jwtSecret);
        res.json({ authToken });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Internal Server Error Occured!!")
    }

});


// Exporting Router
module.exports = router