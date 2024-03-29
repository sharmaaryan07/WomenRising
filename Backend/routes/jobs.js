const express = require('express')
const job = require('../models/JobSchema')
const nodemailer = require("nodemailer");


// importing Router form Express
const router = express.Router();


// Route 1: Add Jobs 
router.post('/addjob', (req, res) => {

    const { ownername, title, description, location, salary, phone, email, materialImg, image } = req.body;

    const addjob = new job({
        ownername, title, description, location, salary, phone, email, materialImg, image
    })

    addjob.save((err) => {
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
                subject: 'Job Accepted.',
                html: `<h2>Your job "${req.body.title}" has been accepted and its displaying in job page .</h2>
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
});


// Route 2: Fetching jobs
router.get('/fetchjob', async (req, res) => {
    const fetchJobs = await job.find({ user: req.user });
    res.json(fetchJobs);

})


// Route 3: To get Perticular job Details
router.get('/getjob/:id', async (req, res) => {

    try {
        const singlejob = await job.findById(req.params.id);
        res.json(singlejob);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Internal Server Error Occured!!")
    }
});


// Route 4: To apply for a job posting
router.post('/apply/:jobId', (req, res) => {
    const jobId = req.params.jobId;
    job.findById(jobId, (err, job) => {
        if (err) {
            console.error('Error retrieving job posting:', err);
            res.status(500).send('Error retrieving job posting');
        } else {
            const { name, email, address, age, phone } = req.body;
            job.applications.push({ name, email, address, age, phone });
            job.save((err) => {
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
                        to: `${job.email}`,
                        subject: 'New job application received',
                        html: `<h2>A new job application has been received for "${job.title}".</h2>
                        <p>Contact Detail</p>
                        <ul>
                        <li>Name: ${req.body.name} </li>
                        <li>Email: ${req.body.email} </li>
                        <li>Address: ${req.body.address} </li>
                        <li>Phone: ${req.body.phone} </li>
                        <li>Age: ${req.body.age} </li>
                        </ul>
                        `,
                    };
                    transporter.sendMail(mailOptions, (err, info) => {
                        if (err) {
                            console.error('Error sending email:', err);
                        } else {
                            console.log('Email sent:', info.response);
                        }
                    });
                    res.status(200).send('Job application saved successfully');
                }
            });
        }
    });
});


// Exporting Router
module.exports = router