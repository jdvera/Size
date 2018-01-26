// Dependencies  ========================================
const express = require("express");
var bodyParser = require('body-parser');
const path = require("path");

// Sets up the Express App  =============================
const PORT = process.env.PORT || 3001;
const app = express();


// **Uncomment once we begin passport work**
// Sets up Passport =====================================
// var passport   = require('passport');
// var session    = require('express-session');
// var flash = require('connect-flash');


// Sets up the Express app to handle data parsing -------/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// **Uncomment once we begin passport work**
// For Passport -----------------------------------------/
// app.use(flash());
// app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
