const db = require('./dbRepository')

let getResultByUserID = async (id) =>{
    let result;
    try {
        await db.pool.query('SELECT tagname_pred,data_pred,user_id,url_pred  from app.resultados where user_id = $1',[id]).then(res =>{
            result = res.rows
        })
        return result
    } catch (error) {
        console.log(error)
        return null;
    }
    
}
let getResultByDateRange = async (id,dateStart,dateEnd) =>{
    let result;

    try {
        await db.pool.query("SELECT tagname_pred,data_pred,user_id,url_pred  from app.resultados  WHERE data_pred >= $1 AND data_pred <  $2 AND user_id = $3",[dateStart,dateEnd,id]).then(res =>{
            result = res.rows
        })
    } catch (error) {
        console.log(error)
        return null;
    }

    return result
}

module.exports = { getResultByUserID,getResultByDateRange}