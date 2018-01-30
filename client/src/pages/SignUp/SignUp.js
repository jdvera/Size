import React, { Component } from "react";
import "./SignUp.css";

class SignUp extends Component {
	render() {
	    return (
			<div className="signUpBody">
		    	<div className="signUpContainer">
			    	<h1>Size</h1>      
			        <form action="signupform" method="post">
			        	<input name="email" type="email" placeholder="Email"></input>
			        	<p></p>
			        	<input name="password" type="password" placeholder="Password"></input>
			        	<p></p>
			        	<input type="password" placeholder="Verify password"></input>
			        	<p></p>
			        	<button type="submit" className="signUpButton">Sign Up</button>
			        </form>
			        <a href="/search">Start new search</a>
			    </div>
		    </div>
		)
	}
}

export default SignUp;

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
