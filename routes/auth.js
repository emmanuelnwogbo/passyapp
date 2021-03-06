var express = require('express');
var router = express.Router();
var passport = require('passport');

//GET /auth/login/facebook
router.get('/login/facebook',
  passport.authenticate('facebook', {scope: ["email"]}));

//GET /auth/facebook/return
router.get('/facebook/return',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.send('success');
  });

//GET /auth/logout
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
