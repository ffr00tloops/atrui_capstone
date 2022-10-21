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

router.get("/getAllOrgs/:id", async (req, res) => {
  try {
    const id = req.params.id

    const searchOrg = await pool.query("SELECT * FROM organizations WHERE id = $1", [id])
      
    res.json(allOrgs.rows)
  }
  catch(err)
  { 
      console.log (err.message)
  }
})

router.post('/createOrganization', async (req,res) => {

  try {
      const { orgname, description, location, email, website, contactno,contactperson  } = req.body;
      const newOrganization = await pool.query("INSERT INTO organizations(orgname, description,location, email, website, contactno, contactperson) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *",[orgname, description,location, email, website, contactno, contactperson])

      res.json(newOrganization)
  }
  catch(err){
      console.log(err)
  }
  
})


module.exports = router;

