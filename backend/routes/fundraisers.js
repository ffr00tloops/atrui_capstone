const express = require('express');
const router = express.Router();
const pool = require('../db')


router.get("/getAllPosts", async (req, res) => {

  try {
    const allFundraisers = await pool.query("SELECT * FROM fundraisers")
      
    res.json(allFundraisers.rows)
  }
  catch(err)
  { 
      console.log (err.message)
  }
})

router.post('/createFundraiser', async (req,res) => {

  try {
      const { title, description, donationamount, duration } = req.body;
      const newFundraiser = await pool.query("INSERT INTO fundraisers(title,description,donationamount, duration) VALUES($1,$2,$3,$4) RETURNING *",[title, description, donationamount, duration])

      console.log('Data Inserted');

      res.json(newFundraiser)
  }
  catch(err){
      console.log(err)
  }
  
})


module.exports = router;

