const express = require('express');
const router = express.Router();
const pool = require('../db')


router.post('/register',  async(req,res) => {
    const {username, password} = req.body;

    try {

        console.log(username,password)
        const newUser = await pool.query("INSERT INTO users(username,password) VALUES($1,$2) RETURNING *", [username, password])

        console.log("New user registered")
    }
    catch(err){
        console.log(err.message)
        res.status(500).send("Server error");
    }
})

module.exports = router;

