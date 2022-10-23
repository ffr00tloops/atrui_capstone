const express = require('express');
const router = express.Router();
const pool = require('../db')
const path = require('path')
const multer = require('multer')


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../backend/upload')
  },
  filename: (req, file, cb) => {
    console.log(file)
    cb(null, `${Date.now()}--${file.originalname}` )
  }
})
const upload = multer({storage : storage})

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

router.get('/getAllPosts/:id', async(req,res) => {
    
  try {
      const id = req.params.id

      const searchFundraiser = await pool.query("SELECT * FROM fundraisers WHERE id = $1", [id])

      res.json(searchFundraiser.rows)
      
  }
  catch(err){
      console.log(err.message)
  }
})

router.post('/createFundraiser', upload.single('image'), async (req,res) => {

  try {

      const image = req.file.filename
      const {organizer, title, description, donationgoal, duration, datemade  } = req.body;
      const newFundraiser = await pool.query("INSERT INTO fundraisers(image, organizer,title,description,donationgoal, duration, datemade) VALUES($1,$2,$3,$4, $5, $6 , $7) RETURNING *",[image, organizer, title, description, donationgoal, duration, datemade])

      res.json(newFundraiser)
  }
  catch(err){
      console.log(err)
  }
})

router.post('/donate', async(req,res) => {
  try {
    const { donor, fundraiser, datemade, amount} = req.body;

    const newDonation = await pool.query("INSERT INTO donations(donor, fundraiser, datemade, amount) VALUES($1,$2,$3,$4) RETURNING *",[donor, fundraiser, datemade, amount])

    res.json(newDonation)
  }
  catch(err) {

  }
})


module.exports = router;

