const db = require('./dbRepository')

let getResultByUserID = async (id) =>{
    let result;
    try {
        await db.pool.query('SELECT tagname_pred,data_pred,user_id,url_pred  from public.resultados where user_id = $1 ORDER BY data_pred DESC',[id]).then(res =>{
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
        await db.pool.query("SELECT tagname_pred,data_pred,user_id,url_pred  from public.resultados  WHERE data_pred >= $1 AND data_pred - interval'3 hours' <=  $2 AND user_id = $3 ORDER BY data_pred DESC;",[dateStart,dateEnd,id]).then(res =>{
            result = res.rows
        })
    } catch (error) {
        console.log(error)
        return null;
    }

    return result
}

module.exports = { getResultByUserID,getResultByDateRange}