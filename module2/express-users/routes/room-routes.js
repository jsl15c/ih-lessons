const express = require('express');

const router = express.Router();

const RoomModel = require('../models/room-model.js');


router.get('/rooms/new', (req, res, next) => {
  if(req.user) {
  res.render('room-views/new-room-view.ejs');
  }
  else {
    res.redirect('/login');
  }
});

router.post('/rooms', (req, res, next) => {
  const theRoom = new RoomModel({
    name:req.body.roomName,
    description:req.body.roomDescription,
    photoUrl:req.body.roomPhotoUrl,
    hasGhosts:false,
    owner:req.user._id
  });
  const coinFlip = Math.floor(Math.random * 2) + 1;
  if (coinFlip === 1) {
    theRoom.hasGhosts = true;
  }
  theRoom.save((err) => {
    if (err) {
      next(err);
      return;
    }
    res.redirect('/rooms');
  });
});

router.get('/rooms', (req, res, next) => {
  if (!req.user) {
    res.redirect('/login');
  }
  RoomModel.find(
    // find the rooms owned by the logged in user
    {owner:req.user._id},
    (err, roomResults) => {
      if (err) {
        next(err);
        return;
      }
      res.render('room-views/room-list-view.ejs',
        {rooms:roomResults}
      );
    }
  );
});

module.exports = router;
