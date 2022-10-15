const express = require('express')
const router = express.Router();
const app = express()
const port = 3000
const cors = require("cors")
const bodyParser = require('body-parser')
const pool = require('./db')


app.use(express.json())


const { auth } = require('express-openid-connect');


const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3000',
  clientID: 'FiRzhpf3fjIZpUa11bynijmWSkgRMLkU',
  issuerBaseURL: 'https://dev--fvxeza3.us.auth0.com'
};

app.use(auth(config));



const userRouter = require('./routes/user')

app.use('/users', userRouter)

app.get("/", async (req, res) => {

    try {
      const allFundraisers = await pool.query("SELECT * FROM fundraisers")
        
      res.json(allFundraisers.rows)
    }
    catch(err)
    { 
        console.log (err.message)
    }
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


