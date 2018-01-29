import React, { Component } from "react";
import "./LogIn.css";

class LogIn extends Component {
	render() {
	    return (
			<div className="logInBody">   
			    <div className="logInContainer">
			    	<h1>Size</h1>
			    	   
			        <form action="/loginform" method="post">
			        	<input name="email" type="email" placeholder="Email"></input>
			        	<p></p>
			        	<input name="password" type="password" placeholder="Password"></input>
			        	<p></p>
			        	<button type="submit" className="logInButton">Log In</button>
			        </form>
			        <div className="createAccount">
			        	<p>Don't have an account yet?</p>
			        	<a href="/signup"><p>Sign Up!</p></a>
			        </div>
			    </div>
	    	</div>
		)
	}
}

export default LogIn;

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
