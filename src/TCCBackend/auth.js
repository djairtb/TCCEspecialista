const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;

const users = [{
    id: 1,
    username: 'tcc',
    password: '$2a$06$HT.EmXYUUhNo3UQMl9APmeC0SwoGsx7FtMoAWdzGicZJ4wR1J8alW',
    email: 'tcc@tcc.com'
},
{
    id: 2,
    username: 'geovana',
    password: '$2a$06$HT.EmXYUUhNo3UQMl9APmeC0SwoGsx7FtMoAWdzGicZJ4wR1J8alW',
    email: 'tcc@tcc.com'
}]

module.exports = function(passport) {
    function findUser(username){
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