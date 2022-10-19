const express = require('express');
const router = express.Router();
const pool = require('../db')


router.get("/getAllFeeds", async (req, res) => {

  try {
    const allFeed = await pool.query("SELECT * FROM feed")
      
    res.json(allFeed.rows)
  }
  catch(err)
  { 
      console.log (err.message)
  }
})

router.post('/createNewFeed', async (req,res) => {

  try {
      const { title, description } = req.body;
      const newFeed = await pool.query("INSERT INTO feed(title,description) VALUES($1,$2) RETURNING *",[title, description])

      console.log('Data Inserted');

      res.json(newFeed)
  }
  catch(err){
      console.log(err)
  }
  
})


module.exports = router;

