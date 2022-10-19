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


module.exports = router;

