var passport = require('passport');
var path = require("path");
var db = require('../models');
const router = require("express").Router();



// Routes
// =============================================================
module.exports = function(app, passport) {

// Authentication Routes
  // =====================

  // send signup errors to client side
  app.get('/signupform', function(req, res) {
      res.send({message: req.flash('error')});
  });

  // send log-in errors to client side
  app.get('/loginform', function(req, res) {
      res.send({message: req.flash('error')});
  });


  app.post('/loginform', function(req, res, next) {
    passport.authenticate('local-login', function(err, user, info) {
      console.log( "err is " + err);
      console.log( "user is " + user);
      console.log( "info is ");
      console.log(info);
      if (err)  { 
        console.log(err);
        return next(err);
      }
      // if (!user) { return res.status(401).send(info); }
      if (!user) {
        return res.status(401).json({status: "401", response: info})
      };
      req.logIn(user, function(err) {
        if (err) {
          return res.status(401).send({"ok": false});
        }
        return res.json({status: "Success", redirect: '/'});
      });
    })(req, res, next);
    // based on the above line, it looks like passport.authenticate() returns a function?  --------------------- JV
  });

  // // process the signup form
  // app.post('/signupform', passport.authenticate('local-signup', {
  //   successRedirect : '/', // redirect to the add pairing page
  //   failureRedirect : '/login', // redirect back to the signup page if there is an error
  //   failureFlash: true
  // }));


  app.post('/signupform', function(req, res, next) {
    passport.authenticate('local-signup', function(err, user, info) {
     if (err)  { return next(err); }
            if (!user) { return res.status(401).send({"ok": false}); }
            req.logIn(user, function(err) {
              if (err) { return res.status(401).send({"ok": false}); }
              return res.json({status: "Success", redirect: '/'});
            });
    })(req, res, next);    
  });

  app.get('/loggedin', function(req, res) {
    if (req.user) {
      res.send(true);
    } else {
      res.send(false);
    }
  });

    app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

  //determine is user is logged in
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/signup');
  }

};
