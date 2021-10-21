const db = require('./dbRepository')

const getUserByID = async (id) =>{
    await db.pool.query('SELECT * from app.resultados where vl_pred = $1',[0]).then(res =>{
        console.log(res.rows)
    })
}

getUserByID()