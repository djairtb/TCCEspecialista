const { Pool } = require('pg')
const pool = new Pool({connectionString: 'postgres://postgres:Sacer@1tb@localhost:5432/cdr'})

module.exports = {pool: pool}