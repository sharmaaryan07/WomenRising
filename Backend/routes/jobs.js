const express = require('express')
const job =require('../models/JobSchema')

// importing Router form Express
const router = express.Router();


// Route 1: Add Jobs 
router.post('/addjob', (req, res)=>{
    
    const { company, title, description, location,salary, phone, email, material, image } = req.body;

        const addblog = new job({
            company, title, description, location,salary, phone, email, material, image
        })
        addblog.save();
        res.send(req.body)
})



// Route 2: Fetching jobs
router.get('/fetchjob',  async (req, res)=>{
    const fetchJobs= await job.find({user: req.user});
    res.json(fetchJobs);
    
})

// Route 3: To get Perticular job Details
router.get('/getjob/:id',async (req, res) => {
    
    try {
        const singlejob = await job.findById(req.params.id);
        res.json(singlejob);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Internal Server Error Occured!!")
    }
});

// Exporting Router
module.exports = router