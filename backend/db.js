const {Pool} = require('pg')
require("dotenv").config();


const pool = new Pool({
    host: `${process.env.DB_HOST}`, // computer name // should be localhost
    user: `${process.env.DB_USER}`,
    password: `${process.env.DB_PASSWORD}`, // password for your postgres database
    database: `${process.env.DB_DATABASENAME}`,
    port: `${process.env.DB_PORTNAME}`,
})

module.exports = pool;