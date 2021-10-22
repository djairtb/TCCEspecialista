const { Pool } = require('pg')
const pool = new Pool({connectionString: 'postgres://useradmin:P@ssw0rd@tccpostgreeserver.postgres.database.azure.com:5432/operation' ,ssl:true})

module.exports = {pool: pool}
