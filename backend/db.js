const {Pool} = require('pg')


const pool = new Pool({
    host: 'localhost', // computer name // should be localhost
    user: 'postgres',
    password: '126734', // password for your postgres database
    database: 'atruidb',
    port: 5432,
})

module.exports = pool;