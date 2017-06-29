// we are configuring Passport in a separate file
// to avoid making a mess in app.js

const passport = require('passport');
const bcrypt = require('bcrypt');

const UserModel = require('../models/user-model.js';)

// serializeUser (controls what goes into the bowl)

// deserializeUser (controls what you get when you check the bowl)

// STRATEGIES --------------------------------------------------
//    different ways of logging in

// SETUP passport-local
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  {                   // 1st arg -> settings object
    usernameField:'loginUsername',
    passwordField:'loginPassword'
  },
  (formUsername, formPassword, next) => {  // 2nd arg -> callback
                                           //   will be called when a user tries to login

   // #1: is there an account with the provided username?
   //     (is there a user with that username in the database)
   UserModel.findOne(
     {username:formUsername},
     {password:formPassword},
     (err, userInfo) => {
       if (err) {
         next(err);
         return;
       }
       if (userInfo === null) {
         // in Passport, if you call the next() with "false", login failed
         next(null, false);
         return;
       }
     }
   );

   // #2: if there is a user with that username, is the password correct?
   if (bcrypt.compareSync(a, b) === false) {

   }
 }
));
