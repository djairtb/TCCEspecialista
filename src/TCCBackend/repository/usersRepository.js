const db = require('./dbRepository')

const getUserByID = async (id) =>{
    await db.pool.query('SELECT NOW()', (err, res) => {
        console.log(err, res.rows)
      })
}

getUserByID()