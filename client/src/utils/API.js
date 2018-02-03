import axios from "axios";

export default {
// PASSPORT.JS AUTHENTICATION ========================= 

	// Is user logged in?
	AuthStatus: function() {
		console.log("utils/API.js running AuthStatus");
		return axios.get("/authstatus");
	},

	// login
	Login: function(userData) {
		console.log("utils/API says.....");
		console.log(userData);
		return axios.post("/loginform", userData);
	}, 
	// signup
	Signup: function(userData) {
		console.log("utils/API says.....");
		console.log(userData);
		return axios.post("/signupform", userData);
	},

	// logout
    Logout: function() {
        console.log("logging out user");
        return axios.get("/logout");
    },

// ================================
// Home search - when users first search for sizes from the homepage

	getSizes: function(userData) {
		console.log("WithBrand getting size data for:");
		console.log(userData);
		const apiEndpoint = "/api/sizes/" + userData.gender + "/" + userData.measurement + "/" + userData.brand;
		return axios.get(apiEndpoint);
	},
	getSizesWithoutBrand: function(userData) {
		console.log("NoBrand getting size data for:");
		console.log(userData);
		const apiEndpoint = "/api/sizes/" + userData.gender + "/" + userData.measurement;
		return axios.get(apiEndpoint);
	},
	saveUserSize: function(userData) {
		console.log("utils/API.js running saveUserSize");
		return axios.put("/api/user-size/", userData);
	}

}