const express = require('express')
const job =require('../models/JobSchema')

// importing Router form Express
const router = express.Router();


// Creating Routes for selling product '/api/sell'
router.post('/addjob', (req, res)=>{
    
    const addJob= job(req.body)
    addJob.save();
    res.send(req.body)
})



// Fetching Products
router.get('/fetchjob', async (req, res)=>{
    const fetchJobs= await job.find({user: req.user});
    res.json(fetchJobs);
    
})

// Exporting Router
module.exports = router