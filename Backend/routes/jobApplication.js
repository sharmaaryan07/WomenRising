// importing Express 
const express = require('express')
const fetchuser = require('../middleware/fetchuser');
const applyJob = require('../models/applyJob')
const job = require('../models/JobSchema')
const nodemailer = require("nodemailer");


// importing Router form Express
const router = express.Router();

// Route to apply for a job posting
router.post('/apply/:jobId', (req, res) => {
    const jobId = req.params.jobId;
    applyJob.findById(jobId, (err, applyJob) => {
        if (err) {
            console.error('Error retrieving job posting:', err);
            res.status(500).send('Error retrieving job posting');
        } else {
            const { name, email, resume } = req.body;
            applyJob.applications.push({ name, email, resume });
            applyJob.save((err) => {
                if (err) {
                    console.error('Error saving job posting:', err);
                    res.status(500).send('Error saving job posting');
                } else {
                    const transporter = nodemailer.createTransport({
                        service: 'Gmail',
                        auth: {
                            user: 'sharmaaru0828@gmail.com',
                            pass: 'ari@sharma123',
                        },
                    });
                    const mailOptions = {
                        from: 'sharmaaru0828@gmail.com',
                        to: job.email,
                        subject: 'New job application received',
                        text: `A new job application has been received for "${job.title}".`,
                        html: `<p>A new job application has been received for "${job.description}".</p>`,
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