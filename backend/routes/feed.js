const express = require('express');
const router = express.Router();
const pool = require('../db')



router.get("/getAllFeeds", async (req, res) => {

  try {
    const allFeed = await pool.query("SELECT * FROM feeds")
      
    res.json(allFeed.rows)
  }
  catch(err)
  { 
      console.log (err.message)
  }
})

router.get('/getAllFeeds/:id', async(req,res) => {
    
  try {
      const id = req.params.id

      const searchFeed = await pool.query("SELECT * FROM feeds WHERE id = $1", [id])

      res.json(searchFeed.rows)
      
  }
  catch(err){
      console.log(err.message)
  }
})

router.post('/createNewFeed', async (req,res) => {

  try {
      const { title, description, orgname } = req.body;
      const newFeed = await pool.query("INSERT INTO feeds(title,description,orgname) VALUES($1,$2,$3) RETURNING *",[title, description,orgname])

      res.json(newFeed)
  }
  catch(err){
      console.log(err)
  }
  
})


module.exports = router;

