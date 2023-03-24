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
    const { donor, fundraiser, datemade, amount , uniqueid} = req.body;

    const newDonation = await pool.query("INSERT INTO donations(donor, fundraiser, datemade, amount) VALUES($1,$2,$3,$4) RETURNING *",[donor, fundraiser, datemade, amount])

    const levelexperience = amount * 0.005 ;
    const rankpoints = amount * 5

    const level = parseInt(levelexperience)

    const updateLevel = await pool.query("UPDATE userdata SET level = level + $1 WHERE uniqueid = $2",[level, uniqueid])
    const updateRP = await pool.query("UPDATE userdata SET rankpoints = rankpoints + $1 WHERE uniqueid = $2",[rankpoints, uniqueid])




    res.json(newDonation)
  }
  catch(err) {

  }
})


router.get("/getDonations", async(req, res) => {

  try {

    const allDonations = await pool.query("SELECT * FROM donations")
      
    res.json(allDonations.rows)
  }
  catch(err)
  { 
      console.log (err.message)
  }
})


router.get("/getDonations/:donor", async (req, res) => {

  try {
    const donor = req.params.donor

    const allDonations = await pool.query("SELECT * FROM donations WHERE donor = $1", [donor])
      
    res.json(allDonations.rows)
  }
  catch(err)
  { 
      console.log (err.message)
  }
})

router.get("/getUserTotalDonations/:donor", async (req, res) => {

  try {
    const donor = req.params.donor

    const allDonations = await pool.query("SELECT sum(amount) FROM donations WHERE donor = $1", [donor])
      
    res.json(allDonations.rows)
  }
  catch(err)
  { 
      console.log (err.message)
  }
})

// GET THE TABLE FOR WHO DONATED THE MOST LAID OUT DESCENDINGLY
router.get("/getAllTotalDonations", async (req, res) => {

  try {

    const allDonations = await pool.query("SELECT donor, sum(amount) as total_donations from donations GROUP BY donor ORDER BY total_donations DESC LIMIT 10")
      
    res.json(allDonations.rows)
  }
  catch(err)
  { 
      console.log (err.message)
  }
})




router.get("/getFundraiserLeaderboard/:fundraiser", async(req, res) => {

  try {

    const fundraiser = req.params.fundraiser

    const searchFundraiser = await pool.query("SELECT id,donor,amount FROM donations WHERE fundraiser = $1 ORDER BY amount DESC LIMIT 10", [fundraiser])
      
    res.json(searchFundraiser.rows)
  }
  catch(err)
  { 
      console.log (err.message)
  }
})

router.get("/getDonationsDesc", async(req, res) => {

  try {

    const allDonations = await pool.query("SELECT * FROM donations ORDER BY amount DESC LIMIT 10")
      
    res.json(allDonations.rows)
  }
  catch(err)
  { 
      console.log (err.message)
  }
})

router.get('/getFundraiserProgress/:fundraiser', async(req,res) => {
    
  try {
    const fundraiser = req.params.fundraiser

      const fundraisergoal = await pool.query("SELECT * FROM fundraisers WHERE title = $1", [fundraiser])

      const totaldonationsum = await pool.query("SELECT SUM(amount) FROM donations WHERE fundraiser = $1", [fundraiser])

      let fund = ''
      let donsum = ''

      if (fundraisergoal.rows[0] && fundraisergoal.rows[0].donationgoal) { // ... and does the first value
        // contain the property activated?
        fund = fundraisergoal.rows[0].donationgoal
      } else {
        fund = 'No Data'
      }

      if (totaldonationsum.rows[0] && totaldonationsum.rows[0].sum) { // ... and does the first value
        // contain the property activated?
        donsum = totaldonationsum.rows[0].sum
      } else {
        donsum = 'No Data'
      }
      
      const fundraisergoalconverted =  fund


      const donationsumconverted =   donsum


      const percentage = donationsumconverted/fundraisergoalconverted * 100
      
      const jsonData = {
          0 : {
            "sum" : totaldonationsum.rows[0].sum,
            "percent" : parseInt(percentage)
          }
      }

      res.json(jsonData)
      
  }
  catch(err){
      console.log(err.message)
  }
})





module.exports = router;

