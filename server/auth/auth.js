/* const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const UserModel = require('../model/model');
const db = require('../db') 

passport.use(
    'register',
    new localStrategy(
        {
            usernameField: 'email',
            passwordField: 'salasana'
        },
        async (email, salasana, done) => {
            try{
                console.log("auth register")
                const user = await db.query('SELECT * FROM kayttajat WHERE email = $1 AND salasana =$2')

                return done(null, user);
            }
            catch (error){
                done(error)
            }
            
        }
    ))

passport.use(
    'login',
    
    new localStrategy(
        {
            usernameField: 'email',
            passwordField: 'salasana'
        },
        
        async (email, password, done) => {
            try {
              const user = await UserModel.findOne({ email });
      
              if (!user) {
                return done(null, false, { message: 'User not found' });
              }
      
              const validate = await user.isValidPassword(password);
      
              if (!validate) {
                return done(null, false, { message: 'Wrong Password' });
              }
      
              return done(null, user, { message: 'Logged in Successfully' });
            } catch (error) {
              return done(error);
            }
          }
        )
      );
 */