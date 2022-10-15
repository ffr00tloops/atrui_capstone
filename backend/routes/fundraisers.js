const express = require('express');
const router = express.Router();
const pool = require('../db')


router.get("/", async (req, res) => {

  try {
    const allFundraisers = await pool.query("SELECT * FROM fundraisers")
      
    res.json(allFundraisers.rows)
  }
  catch(err)
  { 
      console.log (err.message)
  }
})

router.post('/', async (req,res) => {

  try {
      const { title, description, location, datemade, progress } = req.body;
      const newFundraiser = await pool.query("INSERT INTO fundraisers(title,description, location, datemade, progress) VALUES($1,$2,$3,$4,$5) RETURNING *",[title, description, location, datemade, progress])

      console.log('Data Inserted');

      res.json(newFundraiser)
  }
  catch(err){
      console.log(err)
  }


  
})


module.exports = router;

