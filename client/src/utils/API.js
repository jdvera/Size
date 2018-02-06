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

    // If user logged in, we check for any sizes they have on file
    getSaved: function() {
    	console.log("utils/API getting saved data.");
    	return axios.get("/api/profile");
    },

// ================================
// Home search - when users first search for sizes from the homepage

	getShoes: function(userData) {
		console.log("WithBrand getting shoes data for:");
		console.log(userData);
		const apiEndpoint = "/api/shoes/" + userData.gender + "/" + userData.shoe + "/" + userData.brand;
		return axios.get(apiEndpoint);
	},
	getShoesWithoutBrand: function(userData) {
		console.log("NoBrand getting shoes data for:");
		console.log(userData);
		const apiEndpoint = "/api/shoes/" + userData.gender + "/" + userData.shoe;
		return axios.get(apiEndpoint);
	},

	getDresses: function(userData) {
		console.log("WithBrand getting dress data for:");
		console.log(userData);
		const apiEndpoint = "/api/dresses/" + userData.bust + "/" + userData.waist + "/" + userData.hips + "/" + userData.brand;
		return axios.get(apiEndpoint);
	},
	getDressesWithoutBrand: function(userData) {
		console.log("NoBrand getting dress data for:");
		console.log(userData);
		const apiEndpoint = "/api/dresses/" + userData.bust + "/" + userData.waist + "/" + userData.hips;
		return axios.get(apiEndpoint);
	}	

}