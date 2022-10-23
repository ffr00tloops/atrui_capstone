const express = require('express')
const router = express.Router();
const app = express()
const port = 3000
const cors = require("cors")
const bodyParser = require('body-parser')
const pool = require('./db')
app.use(express.static('./upload'));

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');



  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

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
const organizations = require('./routes/organizations')
const feed = require('./routes/feed')
app.use('/fundraisers', fundraisers)
app.use('/userdata', userData)
app.use('/organizations',organizations )
app.use('/feed', feed)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


