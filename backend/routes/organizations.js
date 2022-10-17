const express = require('express');
const router = express.Router();
const pool = require('../db')


router.get("/getAllOrgs", async (req, res) => {

  try {
    const allOrgs = await pool.query("SELECT * FROM organizations")
      
    res.json(allOrgs.rows)
  }
  catch(err)
  { 
      console.log (err.message)
  }
})


module.exports = router;

