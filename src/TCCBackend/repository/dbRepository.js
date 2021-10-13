const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'cdr',
  password: 'tcc2021',
  port: 5432,
})
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})
const client = new Client({
  user: 'dbuser',
  host: 'database.server.com',
  database: 'cdr',
  password: 'secretpassword',
  port: 5432,
})
client.connect()
client.query('SELECT NOW()', (err, res) => {
  console.log(res)
  client.end()
})
module.exports = {pool: pool}