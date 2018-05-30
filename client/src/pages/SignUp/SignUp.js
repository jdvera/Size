import React, { Component } from "react";
import "./SignUp.css";
import API from "../../utils/API";
import { Link } from "react-router-dom";

class SignUp extends Component {

	state = {
	  email: "",
	  password: "",
	  verifyPassword: "",
	  error: ""
	};

	handleInputChange = event => {
	  const { name, value } = event.target;
	  this.setState({
	    [name]: value
	  });
	};

	// when a user submits the signup form
	handleSignUp = event => {
		// prevent page from refreshing
	 	event.preventDefault();
	 	// verify that all fields have been filled in
	 	if (this.state.email && this.state.password && this.state.verifyPassword) {
	  		this.verifyPasswords();
		};
	};

	// verify that the password fields match
	verifyPasswords = () => {
		if (this.state.password !== this.state.verifyPassword) {
			this.setState({
				error: "Your passwords don't match."
			});
			return;
		} else {
			this.signup();
		}
	};

	// submit request to create user
	signup = () => {
	  	console.log("SignUp.js says: "+ this.state.email + " " + this.state.password);
	    API.Signup(
    		{
		  		email: this.state.email,
		  		password: this.state.password
    		}
    	)
       .then(res => this.signupResponse(res))
       .catch(err => console.log(err))
	};

	// upon receiving response from Signup post request
	signupResponse = res => {
		// if login is successful
		if (res.data === "Success") { 
			// redirect to home page
			this.props.history.push('/')
		} 
		// if login is not successful
		else {
			// display reason message
			console.log(res.data);
			this.setState({
				email: "",
				password: "",
				verifyPassword: "",
				error: res.data
			});
		}
	};

	render() {
	    return (
			<div className="signUpBody">
		    	<div className="signUpContainer">
		    		<h1>Size</h1>
					<Link to={"/"}style={{ textDecoration: 'none' }}>
                </Link>           
			        <form action="signupform" method="post">
			        	<input 
			        		value={this.state.email}
			        		onChange={this.handleInputChange}
			        		name="email" 
			        		type="email" 
			        		placeholder="Email" />
			        	<p></p>
			        	<input 
			        		value={this.state.password}
			        		onChange={this.handleInputChange}
			        		name="password" 
			        		type="password" 
			        		placeholder="Password" />
			        	<p></p>
			        	<input 
			        		value={this.state.verifyPassword}
			        		onChange={this.handleInputChange}
			        		name="verifyPassword"
			        		type="password" 
			        		placeholder="Verify password" />
			        	<p></p>
			        	<button 
				        	disabled={!(this.state.password && this.state.email && this.state.verifyPassword)}
				        	onClick={this.handleSignUp}
				        	type="submit" 
				        	className="signUpButton">Sign Up</button>
			        
			        <div className="errorMessage">{this.state.error}</div>
							<a href="/">
                        Back to Search
                         </a>
						 </form>
			    </div>
		    </div>
		)
	}
}

export default SignUp;

