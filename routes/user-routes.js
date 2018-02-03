var passport = require('passport');
var path = require("path");
var db = require('../models');
const router = require("express").Router();

// Routes
// =============================================================
module.exports = function(app, passport) {

  // Save user size info
  app.put("/api/user-size/", function(req, res) {
    // if a user exists / is logged in
    if (req.user.id) {
    // save their "true" size to their user profile
      console.log("sizesRoutes app.put, found user: " + req.user.id);
      db.Users.update(
        {
          gender: req.body.gender, 
          clothing_type: req.body.clothing_type,
          measurement: req.body.measurement
        },
        {
          where: {
            id: req.user.id
          }
        }).then(function(dbUsers){
          console.log("User info updated");
          console.log(dbUsers);
          res.json(dbUsers);
        }).catch(function(err) {
          console.log(err);
        })
    };
  });

// Authentication Routes ==================
// ========================================

  // PASSSPORT CUSTOM CALLBACK ROUTES =========

  app.post('/loginform', function(req, res, next) {
    console.log("/loginform user route");
    // console.log(res);
      passport.authenticate('local-login', function(err, user, info) {
        console.log("user-routes.sj: /loginform authenticate function");
          if (err) { 
            return res.status(500).json(error);
           }
          if (!user) { 
            return res.json(info.message);
           }
          req.logIn(user, function(err) {
              if (err) { return next(err); }
              return res.json("Success");
          });
      })(req, res, next);
  });

  app.post('/signupform', function(req, res, next) {
      passport.authenticate('local-signup', function(err, user, info) {
      console.log("user-routes.sj: /loginform authenticate function");
          if (err) { 
            return res.status(500).json(error);
           }
          if (!user) { 
            return res.json(info.message);
           }
          req.logIn(user, function(err) {
              if (err) { return next(err); }
              return res.json("Success");
          });
      })(req, res, next);
  });

  // END PASSSPORT CUSTOM CALLBACK ROUTES ^^

  app.get('/authstatus', function(req, res) {
    console.log("user-routes.js: running /authstatus");
    if (req.user) {
      console.log("user is loged in!");
      // console.log(req.user);
      res.send(true);
    } else {
      console.log("user is loged in!");
      // console.log(req.user);
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
