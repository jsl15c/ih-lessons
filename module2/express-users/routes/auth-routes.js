const express = require('express');

const bcrypt = require('bcrypt');

const router = express.Router();

const UserModel = require('../models/user-model.js');

router.get('/signup', (req, res, next) => {
  if (req.user) {
    res.redirect('/');
  }
  else {
    res.render('auth-views/signup-view.ejs');
  }
});

router.post('/signup', (req, res, next) => {
  // if username or password are empty display an error
  if (req.body.signupUsername === '' || req.body.signupPassword === '') {
    res.render('auth-views/signup-view.ejs', {
      dumbUser:'Please provide both username and password'
    });
  }
  // else check if username is taken
  UserModel.findOne({username:req.body.signupUsername},
    (err, userInfo) => {
    if (userInfo) {
      res.render('auth-views/signup-view.ejs',
      {
        dumbUser:'Sorry, that username is taken'
      });
      return;
    }
    const salt = bcrypt.genSaltSync(10);
    const scrambledPassword = bcrypt.hashSync(req.body.signupPassword, salt);

    const theUser = new UserModel({
      fullName:req.body.signupFullName,
      username:req.body.signupUsername,
      encryptedPassword:scrambledPassword
    });
    theUser.save((err) => {
      if (err) {
        next(err);
        return;
      }
      res.redirect('/');
    });
  });
});
// END REGISTRATION

const passport = require('passport');

// START LOG IN
router.get('/login', (req, res, next) => {
  if (req.user) {
    res.redirect('/');
  }
  else {
    res.render('auth-views/login-view.ejs');
  }
});

router.post('/login', passport.authenticate(
  'local', // 1st arg -> name of strategy (determined by the strategy's npm package)
  {   // 2nd arg -> settings object
    successRedirect:'/',
    failureRedirect:'login'
  }
));
// END LOG IN

// LOG OUT ROUTES
router.get('/logout', (req, res, next) => {
// req.logout() functioned is defined by the passport middleware (app.js)
  req.logout();
  res.redirect('/');
});



module.exports = router;
