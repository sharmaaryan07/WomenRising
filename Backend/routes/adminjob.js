const express = require('express')
const job = require('../models/adminjobSchema')
const nodemailer = require("nodemailer");


// importing Router form Express
const router = express.Router();


// Route 1: Add Jobs 
router.post('/addadminjob', (req, res) => {

    const { ownername, title, description, location, salary, phone, email, materialImg, image } = req.body;

    const addjob = new job({
        ownername, title, description, location, salary, phone, email, materialImg, image
    })
    addjob.save();
    res.send(req.body)
})



// Route 2: Fetching jobs
router.get('/fetchadminjob', async (req, res) => {
    const fetchJobs = await job.find({ user: req.user });
    res.json(fetchJobs);

})



// Route 4: To get Perticular job Details
router.get('/getadminjob/:id', async (req, res) => {

    try {
        const singlejob = await job.findById(req.params.id);
        res.json(singlejob);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Internal Server Error Occured!!")
    }
});

router.delete('/deleteadminjob/:id', async (req, res) => {

    try {

        const deletejob = await job.findById(req.params.id);
        if (!deletejob) {
            return res.status(404).send("Not Found")
        }

        const remove = await job.findByIdAndDelete(req.params.id)
        res.send(remove);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Internal Server Error Occured!!")
    }
});

// Exporting Router
module.exports = router