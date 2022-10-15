const express = require('express');
const router = express.Router();
const pool = require('../db')


router.post('/newUser', async(req,res) => {
    
    try {
        const {user_id} = req.body

        const newUser = await pool.query("INSERT INTO userdata(uniqueid) VALUES($1) RETURNING *", [user_id])
        
    }
    catch(err){
        console.log(err.message)
    }
})

module.exports = router;

