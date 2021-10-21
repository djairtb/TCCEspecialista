const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'cdr',
  password: 'tcc2021',
  port: 5432,
})

const query = async(sql,values) =>{}

module.exports = {pool: pool}