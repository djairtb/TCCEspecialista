const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const repo = require("./repository/userRepository")

let users
async function loadUser() {
    let usersq = await repo.getUserCredentials()
    users = usersq.map(user =>{
        return{
            id: user.id,
            username: user.login,
            email: user.email,
            password: user.pass_hash,
            nome: user.nome
        }
    })
}
loadUser()
 

module.exports = function(passport) {
    function findUser(username){
        loadUser()
        return users.find(item => item.username === username);
    }
    function findUserById(id){
       user = users.find(item => item.id === id);
    }
    passport.use('login',new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
    },
    (username, password,done) => {
        try {
            const user = findUser(username)
            if(!user) return done(null,false)
            const isValid = bcrypt.compareSync(password, user.password)
            if(!isValid) return done(null,false)
            return done(null,user)
        } catch (error) {
            return done(err,false)
            
        }
    }))
    passport.serializeUser((user,done)=>{
        done(null,user.id);
    })

    passport.deserializeUser(async(id,done)=>{
        try {
            const user =  await findUserById(id);
            done(null,user); 
        } catch (error) {
            console.log(error);
            done(error,null)
        }
    })

}