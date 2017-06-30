const express = require('express');
const router  = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/special', (req, res, next) => {
  if (req.user) {
    res.render('special-secret-view.ejs');
  }
  else {
    res.redirect('/login');
  }
});

module.exports = router;
