// import axios from "axios";

// export default {
// 	//write requests as functions
// 	// getResults: function() {
// 	// return axios.get("/api/:clothing/:size");
// 	// },


// PASSPORT.JS AUTHENTICATION REQUESTS ╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱
// NOTE TO FE-DEV: the routes below (ie: "/signupform" must stay the same, but feel free to change the function names!

// LOGIN & SIGNUP
// These requests should come straight from the form in the react page/component, example below:
	// <form action="/loginform" method="post">
	// <form action="/signupform" method="post">
// I think this means we don't need axios calls for those two actions.
// We just need to make sure that the form data matches up w/ the schema
	// LOGIN & SIGNUP
		// At least, use name="email", e.g.:
			// <input type="email" name="email" />
		// At least, use name="password", e.g.:
			// <input type="password" name="password" />


// we need functions to return error message data 
// if/when passport returns an error on user signup or login
// IE: "email is already registered", "wrong password", etc.
	// getSignupError: function() {
	// 	return axios.get("/signupform");
	// }

	// getLoginError: function() {
	// 	return axios.get("/loginform")
	// }

// here is another get request function to confirm if the user is logged in or not
// you can use this if you need to show / hide a login or logout button anywhere on the front-end
// the request will return a respone. If the response is not empty (ie: 'if (res)'), then user is logged in
// if the response is empty (ie: if (!res)), then the user is not logged in.
	// getLoggedInStatus: function() {
	// 	return axios.get("/loggedin");
	// }
// END PASSPORT.JS AUTHENTICATION REQUESTS ╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲╱╲


// ================================
// Home search - when users first search for sizes from the homepage,
// they must enter: 
	// clothing type (req'd) [shoes]
	// brand (optional)
	// gender radio button (req'd)
	// measurement (req'd)
// with brand
// getResults: function() {
// return axios.get("/api/:clothing/:gender/:measurement/:brand");

// without brand
// getResults: function() {
// return axios.get("/api/:clothing/:gender/:measurement/");

// }