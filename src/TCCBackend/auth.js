const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;

const users = [{
    _id = 1,
    username: 'tcc',
    password: '$2a$06$HT.EmXYUUhNo3UQMl9APmeC0SwoGsx7FtMoAWdzGicZJ4wR1J8alW',
    email: 'tcc@tcc.com'
}]

modules.exports = function(passport) {
    function findUser(username){
        return users.find(item => item.username === username);
    }
    function findUserById(id){
        return users.find(item => item.id === id);
    }
    passport.serializeUser((user,done)=>{
        done(null,user._id);
    })

    passport.deserializeUser((id,done)=>{
        try {
            const user = findUserById(id);
            return done(null,user); 
        } catch (error) {
            console.log(error);
            return done(err,null)
        }
    })

    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
    },
    (username, password,done) => {
        try {
            const user = users.findUser(username)
            if(!user) return done(null,false)

            const isValid = bcrypt.compareSync(password, user.password)

            if(!isValid) return done(null,user)
            return done(null,true)
        } catch (error) {
            console.log(error);
            return done(err,false)
            
        }
    }))
}