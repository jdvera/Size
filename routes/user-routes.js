var passport = require('passport');
var path = require("path");
var db = require('../models');
const router = require("express").Router();
var Sequelize = require('sequelize');

// Routes
// =============================================================
module.exports = function(app, passport) {
  var Op = Sequelize.Op;

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
      console.log("user is logged in!");
      console.log(req.user);
      res.send(true);
    } else {
      console.log("user doesn't exist!");
      console.log(req.user);
      res.send(false);
    }
  });

  // get user saved data from profile
  app.get("/api/profile", function(req, res) {
    console.log("sizeRoutes.js getting profile data");
    // if user logged in
    if (req.user) {
      let savedData;
      console.log(req.user.dataValues.gender);

      // retreive any saved shoe size
      db.Shoes.findAll({
            where: {
              gender: req.user.dataValues.gender,
              shoeMin: { [Op.lte]: req.user.dataValues.measurement },
              shoeMax: { [Op.gte]: req.user.dataValues.measurement }
            },
              include: [db.Logos]
          }).then(function(dbShoes) {
            // res.json(dbSizes); 
            savedData = dbShoes;
        }).then(savedData => {
          // retrieve any saved dress size
          db.Dresses.findAll({
                where: {
                  bust: { [Op.lte]: req.user.dataValues.bust },
                  waist: { [Op.gte]: req.user.dataValues.waist },
                  hips: { [Op.gte]: req.user.dataValues.hips }
                },
                  include: [db.Logos]
              }).then(function(dbDresses) {
                // console.log(dbDresses)
                if (dbDresses) { savedData = dbDresses; };
                console.log(savedData);
                res.json(savedData);
            })
        }) 
        .catch(err => console.log(err))
    } else {
      console.log("user doesn't exist!");
      console.log(req.user);
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
