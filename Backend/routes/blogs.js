// importing Express 
const express = require('express')
const fetchuser = require('../middleware/fetchuser');
const blogSchema = require('../models/blogSchema')

// importing Router form Express
const router = express.Router();

//Route 1: Fetching all Blogs
router.get('/fetchblog', async (req, res) => {
    try {
        const fetchblog = await blogSchema.find({ user1: req.user });
        res.json(fetchblog);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Internal Server Error Occured!!")
    }
})


//Route 2: Creating Routes for Add Blogs
router.post('/addblog', fetchuser, (req, res) => {

    try {
        const { title, description, image } = req.body;

        const addblog = new blogSchema({
            title, description, image, user: req.user.id
        })
        addblog.save();
        res.send(req.body)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Internal Server Error Occured!!")
    }
})


//Route 3: Fetching user specific Blogs
router.get('/fetchuserblog', fetchuser, async (req, res) => {

    try {
        const fetchuserblog = await blogSchema.find({ user: req.user.id });
        res.json(fetchuserblog);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Internal Server Error Occured!!")
    }


})

// Route 4: To get Delete blog of specific user
router.delete('/deleteblog/:id', fetchuser, async (req, res) => {

    try {

        const deleteBlog = await blogSchema.findById(req.params.id);
        if (!deleteBlog) {
            return res.status(404).send("Not Found")
        }

        // Allow deletion only if user owns this blog
        if (deleteBlog.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed")
        }

        const remove = await blogSchema.findByIdAndDelete(req.params.id)
        res.send(remove);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some Internal Server Error Occured!!")
    }
});


// Route 5: Editing you Blog
router.put('/editblog/:id', fetchuser, async (req, res) => {

    const { title, description, image } = req.body;

    // Create a new Blog object
    const newBlog = {};
    if (title) { newBlog.title = title };
    if (description) { newBlog.description = description };
    if (image) { newBlog.image = image };

    // Find the blog to be updated 
    let upadteBlog = await blogSchema.findById(req.params.id);
    if (!upadteBlog) { return res.status(404).send("Not Found") }

    if (upadteBlog.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed")
    }

    upadteBlog = await blogSchema.findByIdAndUpdate(req.params.id, { $set: newBlog }, { new: true })
    res.json({ upadteBlog });
});




// Exporting Router
module.exports = router