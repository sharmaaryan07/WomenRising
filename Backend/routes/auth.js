const express = require('express')

// importing Router form Express
const router = express.Router();

router.get('/fetchuser', async (req, res)=>{
     fetchuser= {
        name:'Kakashi Hatake',
        email:'kakashi@gmail.com'
    }
    res.json(fetchuser);
    
})

// Exporting Router
module.exports = router