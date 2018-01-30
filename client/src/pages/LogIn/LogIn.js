import React, { Component } from "react";
import "./LogIn.css";
import API from "../../utils/API";

class LogIn extends Component {

	state = {
	  email: "",
	  password: ""
	};

	handleInputChange = event => {
	  const { name, value } = event.target;
	  this.setState({
	    [name]: value
	  });
	};

	handleLogin = event => {
	  event.preventDefault();
	  if (this.state.email && this.state.password) {
	  	console.log("Login.js says: "+ this.state.email + " " + this.state.password);
	    API.Login(
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
	      .catch(err => API.getLoginError()
	      	.then(res => {console.log("res is: "); console.log( res); })
	      	.catch(err => console.log(err)));
	  }
	};

	render() {
	    return (
			<div className="logInBody">   
			    <div className="logInContainer">
			    	<h1>Size</h1>      
			        <form>
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
			        	<button 
				        	disabled={!(this.state.password && this.state.email)}
				        	onClick={this.handleLogin}
			        		type="submit" 
			        		className="logInButton">
			        			Log In
	        			</button>
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
