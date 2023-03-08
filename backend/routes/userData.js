const express = require('express');
const router = express.Router();
const pool = require('../db')

// Once hit it will verify through the users database whether the user_id already exists in the program. Will return true or false.
router.post('/verifyNewUser', async(req,res) => {
    try {
        const {uniqueid} = req.body
        const searchUserId = await pool.query("SELECT * FROM userdata WHERE uniqueid = $1", [uniqueid])

        // if the array is greater than one then there is already an existing user with the id therefore no user will be added.
        if ((searchUserId.rows).length > 0) {
            res.json(true)
        }
        else {
            res.json(false)
        }
    }
    catch(err){
        console.log(err.message)
    }
})

// Will create user info to the database containing the unique_id and email.
router.post('/newUser', async(req,res) => {
    try {
        const {uniqueid, email,role} = req.body
        const newUser = await pool.query("INSERT INTO userdata(uniqueid,email,level,rankpoints,role) VALUES($1,$2,$3,$4,$5) RETURNING *", [uniqueid, email,0,0,role])
    }
    catch(err){
        console.log(err.message)
    }
})

router.get('/getUserPoints/:id', async(req,res) => {

    try {

        const id = req.params.id
        const searchUserData = await pool.query("SELECT id,level,rankpoints,totaldonations FROM userdata WHERE uniqueid = $1", [id])
        res.json(searchUserData.rows)
      }
      catch(err)
      { 
          console.log (err.message)
      }

})

router.get('/getUserRoles/:id', async(req,res) => {

    try {

        const id = req.params.id
        const searchUserData = await pool.query("SELECT email,role FROM userdata WHERE uniqueid = $1", [id])
        res.json(searchUserData.rows)
      }
      catch(err)
      { 
          console.log (err.message)
      }

})



module.exports = router;

