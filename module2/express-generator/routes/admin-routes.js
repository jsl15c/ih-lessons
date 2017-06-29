const express = require('express');
const router  = express.Router();

router.get('/admin', (req, res, next) => {
  res.render('./admin/admin.ejs');
});

router.get('/admin/backdoor',(req, res, next) => {
  res.render('./admin/backdoor/backdoor-view.ejs');
});

module.exports = router;
