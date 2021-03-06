const db = require('./dbRepository')

let getUserCredentials = async () => {
    let result;
    try {
        await db.pool.query('SELECT * from public.users').then(res =>{
            result = res.rows
        })
        return result
    } catch (error) {
        console.log(error)
        return null;
    }
    
}

let userRegister = async (login, passwordHash,email,nome) => {
    try {
        await db.pool.query('INSERT INTO public.users (login, pass_hash, email, nome) VALUES ($1,$2,$3,$4) returning ID',[login,passwordHash,email,nome]).then(res =>{
            result = res.rows
        })
        return result
    } catch (error) {
        console.log(error)
        return null;
    }
}

let checkUserExists = async (login,email) => {
    let result;
    try {
        await db.pool.query('SELECT u.id,u.nome from public.users u WHERE u.login = $1 OR u.email = $2',[login,email]).then(res =>{
            result = res.rows
        })
        return result
    } catch (error) {
        console.log(error)
        return null;
    }
    
}

let changeForgottenPassword = async (userid,passwordHash) => {
    try {
        await db.pool.query('UPDATE public.users SET pass_hash = $1 WHERE id = $2 returning id',[passwordHash,userid]).then(res =>{
            result = res.rows
        })
        return result
    } catch (error) {
        console.log(error)
        return null;
    }
}

module.exports = {userRegister,getUserCredentials,checkUserExists,changeForgottenPassword}
