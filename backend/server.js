const express = require('express')
const router = express.Router();
const app = express()
const port = 3000
const cors = require("cors")
const bodyParser = require('body-parser')
const pool = require('./db')


app.use(express.json())



const userRouter = require('./routes/user')

44

app.use('/users', userRouter)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


