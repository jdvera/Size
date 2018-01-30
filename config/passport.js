// usersController.js 
// -- ** AKA Passport.js config file ** -- 


// Dependencies ================================================
const db = require("../models");
const bCrypt = require('bcrypt-nodejs');

// prepare for export
module.exports = function(passport) {
const User = db.Users;
	// load all the things we need
	const LocalStrategy = require('passport-local').Strategy;

	 // LOCAL SIGNUP ========================================================
	 // using named strategies since we have one for login and one for signup
	 // (by default, if there was no name, it would just be called 'local')

	 passport.use('local-signup', new LocalStrategy({
	     // by default, local strategy uses username and password, we will override with email
	     usernameField : 'email',
	     passwordField : 'password',
	     passReqToCallback : true // allows us to pass back the entire request to the callback
	 },
	 function(req, email, password, done) {
	     // asynchronous
	     // User.findOne wont fire unless data is sent back
	     	const generateHash = function(password) {
	     					return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
	     				};
			 // find a user whose email is the same as the forms email
			 // we are checking to see if the user trying to login already exists
			User.findOne({ where: {
			    email: email
			  } }).then(function(user) {

			     // check to see if theres already a user with that email
			     if (user) {
			         return done(null, false, {message: 'That email is already taken.'}); 
			     } else {
			     	const userPassword = generateHash(password);
			     	const data = {
						email: email, //come back to match ana file
						password: userPassword, //come back to match ana file
					};
					//create a new user
					
					User.create(data).then(function(newUser) {
						//if not a new user, don't make a new user
						if (!newUser) {
							return done(null, false);
						}
						if (newUser) {
							return done(null, newUser);
						}
					});
			     };

			 }).catch(function(err) {
					return done(null, false, {
						message: 'Something went wrong with your registration.'
					});
				});

	 })); //End Local Signup


	 // SERIALIZE ===============================================================
	 passport.serializeUser(function(user, done) {
	 	done(null, user.id);
	 });
	 // DESERIALIZE  ============================================================
	 passport.deserializeUser(function(id, done) {
	 	User.findById(id).then(function(user) {
	 		if (user) {
	 			done(null, user);
	 		} else {
	 			done(user.errors, null);
	 		}
	 	});
	 });

 
     // LOCAL LOGIN =============================================================
     // again, using named strategies since we have one for login and one for signup
     // (by default, if there was no name, it would just be called 'local')

     passport.use('local-login', new LocalStrategy({
         // by default, local strategy uses username and password, we will override with email
         usernameField : 'email',
         passwordField : 'password',
         passReqToCallback : true // allows us to pass back the entire request to the callback
     },
     function(req, email, password, done) { // callback with email and password from our form
     	const User = db.Users;
     	console.log("passport.js: I am about to check if the user can login!");
     	console.log(email);
     	//encrypt password
     	const isValidPassword = function(userpass, password) {
			return bCrypt.compareSync(password, userpass);
		};
         // find a user whose email is the same as the forms email
         // we are checking to see if the user trying to login already exists
         User.findOne({ where: {
        	email: email
      	 	} }).then(function(user) {
         	console.log("user is....");
         	console.log(user.email);

      	 		if (!user) {
      	 			console.log('There is no account associated with that email.');
					return done(null, false, {
						message: 'There is no account associated with that email.'
					});
				}

				console.log(user.password);
				console.log(password);
				//if password isn't right, alert user
				if (!isValidPassword(user.password, password)) {
					console.log('Incorrect password.');
					return done(null, false, {
						message: 'Incorrect password.'
					});
				}
				
				const userinfo = user.get();
				console.log("passport.js - user found");
				return done(null, userinfo);
				//if an error is thrown, alert user
				}).catch(function(err) {
					console.log('Something went wrong with your login.');
					return done(null, false, {
						message: 'Something went wrong with your login.'
					});
				});
     }));  // End local login

} // end module export