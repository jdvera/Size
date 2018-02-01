import React, { Component } from "react";
import "./SignUp.css";
import API from "../../utils/API";
import { Link } from "react-router-dom";

class SignUp extends Component {

	state = {
	  email: "",
	  password: "",
	  verifyPassword: ""
	};

	handleInputChange = event => {
	  const { name, value } = event.target;
	  this.setState({
	    [name]: value
	  });
	};

	handleSignUp = event => {
	  event.preventDefault();
	  if (this.state.email && this.state.password && this.state.verifyPassword) {
	  	console.log("SignUp.js says: "+ this.state.email + " " + this.state.password);
	    API.Signup(
	    		{
    		  		email: this.state.email,
    		  		password: this.state.password
	    		}
	    	)
	      .then(res => {
	      	console.log("res is: "); 
	      	console.log( res.status);
	      	console.log( res); 
	      	if (res.status === 200) { this.props.history.push('/') }
	      })
	      .catch(
	      	err => API.getSignupError()
	      	.then(res => {console.log("res is: "); console.log( res); })
	      	.catch(err => console.log(err))
	      );
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
			        </form>
							<a href="/">
                        Back to Search
                         </a>
			    </div>
		    </div>
		)
	}
}

export default SignUp;

