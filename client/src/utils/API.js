import axios from "axios";

export default {
// PASSPORT.JS AUTHENTICATION ========================= 
	Login: function(userData) {
		console.log("utils/API says.....");
		console.log(userData);
		return axios.post("/loginform", userData)
	}, 
	Signup: function(userData) {
		console.log("utils/API says.....");
		console.log(userData);
		return axios.post("/signupform", userData)
	},


// we need functions to return error message data 
// if/when passport returns an error on user signup or login
// IE: "email is already registered", "wrong password", etc.
	getSignupError: function() {
		console.log(`getting signup error`);
		return axios.get("/signupform");
	},

	getLoginError: function() {
		console.log(`getting login error`);
		return axios.get("/loginform")
	}

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

}