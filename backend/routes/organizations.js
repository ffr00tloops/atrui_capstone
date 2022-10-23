const express = require('express');
const router = express.Router();
const pool = require('../db')
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

router.get("/getAllOrgs/:id", async (req, res) => {
  try {
    const id = req.params.id

    const searchOrg = await pool.query("SELECT * FROM organizations WHERE id = $1", [id])
      
    res.json(searchOrg.rows)
  }
  catch(err)
  { 
      console.log (err.message)
  }
})

router.post('/createOrganization', upload.single('image'),async (req,res) => {

  try {
      const image = req.file.filename
      const { orgname, description, location, email, website, contactno,contactperson  } = req.body;
      const newOrganization = await pool.query("INSERT INTO organizations(image, orgname, description,location, email, website, contactno, contactperson) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *",[image, orgname, description,location, email, website, contactno, contactperson])

      res.json(newOrganization)
  }
  catch(err){
      console.log(err)
  }
  
})


module.exports = router;

