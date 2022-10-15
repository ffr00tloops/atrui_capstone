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



const fundraisers = require('./routes/fundraisers')
const userData = require('./routes/userData')
app.use('/fundraisers', fundraisers)
app.use('/userdata', userData)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


