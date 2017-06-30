// we are configuring Passport in a separate file
// to avoid making a mess in app.js
const passport = require('passport');
const bcrypt = require('bcrypt');

const UserModel = require('../models/user-model.js');

// serializeUser (controls what goes into the bowl)
//      - save only the user's database ID in the bowl
//      - happens only when you log in
passport.serializeUser((userInfo, next) => {
  next(null, userInfo._id);
  // null in 1st arg means NO ERROR
});

// deserializeUser (controls what you get when you check the bowl)
//      - use the ID in the bowl to retrieve the user's information
//      - happens every time you visit any page on site after logging in
passport.deserializeUser((idFromBowl, next) => {
  UserModel.findById(idFromBowl, (err, userInfo) =>{
    if (err) {
      next(err);
    }
    next(null, userInfo);
  });
});

// STRATEGIES --------------------------------------------------
//    different ways of logging in

// SETUP passport-local
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  {                              // 1st arg -> settings object
    usernameField:'loginUsername',
    passwordField:'loginPassword'
  },
  (formUsername, formPassword, next) => {  // 2nd arg -> callback
                                           //   will be called when a user tries to login

   // #1: is there an account with the provided username?
   //     (is there a user with that username in the database)
   UserModel.findOne(
     {username:formUsername},
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
       // #2: if there is a user with that username, is the password correct?
       if (bcrypt.compareSync(formPassword, userInfo.encryptedPassword) === false) {
         // in Passport, if you call the next() with "false", login failed
         next(null, false);
         return;
       }

       // if we pass those if statements
       next(null, userInfo);
     }
   );
 })
);

// passport-facebook (login with your facebook account)
const FbStrategy = require('passport-facebook').Strategy;
passport.use(new FbStrategy(
  {
    clientID:'273563533050519', // settings object
    clientSecret:'065b35bc46c692a30eda35f03872d45f',
    callbackURL:'/auth/facebook/callback'  // out route - name whatever you want
  },

  (accessToken, refreshToken, profile, next) => { // callback function
    // will be called when a user allows us to log them in with facebook
    console.log('');
    console.log('🌎 🌎 🌎 🌎 🌎 facebook profile info 🌎 🌎 🌎 🌎 🌎');
    console.log(profile);
    console.log('');

    UserModel.findOne(
      {facebookId: profile.id},
      (err, userInfo) => {
        if (err) {
          next(err);
          return;
        }
        // if first time loggin in with fb, userInfo will be empty
        if (userInfo) {
          next(null, userInfo);
          return;
        }

        // if its the first time they log in, SAVE THEM IN THE DB!
        const theUser = new UserModel({
          fullname:profile.displayName,
          facebookId:profile.Id,
        });
        theUser.save((err) => {
          if (err) {
            next(err);
            return;
          }
          next(null, theUser);
        });
      }
    );
    // Receiving the Facebook user info and SAVING IT!
    //Unless we have already saved their info, in which case we log them in
  }
));


const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
passport.use(new GoogleStrategy(
  {
    clientID:'21120536470-etk12f9pnjbp0jgocl47nbghugq1lhrb.apps.googleusercontent.com', // settings object
    clientSecret:'xcywo1vDOnn2FOWz8laIux1A',
    callbackURL:'/auth/google/callback' // out route - name whatever you want
  },

  (accessToken, refreshToken, profile, next) => { // callback function
    // will be called when a user allows us to log them in with facebook
    console.log('');
    console.log('🛑 🛑 🛑 🛑 🛑 google profile info 🛑 🛑 🛑 🛑 🛑');
    console.log(profile);
    console.log('');

    UserModel.findOne(
      {googleId: profile.id},
      (err, userInfo) => {
        if (err) {
          next(err);
          return;
        }
        // if first time loggin in with fb, userInfo will be empty
        if (userInfo) {
          next(null, userInfo);
          return;
        }

        // if its the first time they log in, SAVE THEM IN THE DB!
        const theUser = new UserModel({
          fullname:profile.displayName,
          googleId:profile.Id,
        });

        if (theUser.fullname === undefined) {
          theUser.fullname = profile.emails[0].value;
        }

        theUser.save((err) => {
          if (err) {
            next(err);
            return;
          }
          next(null, theUser);
        });
      }
    );
    // Receiving the Facebook user info and SAVING IT!
    //Unless we have already saved their info, in which case we log them in
  }
));
