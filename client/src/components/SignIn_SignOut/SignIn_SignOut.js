import React, { Component } from "react";
import API from "../../utils/API";
import "./SignIn_SignOut.css";

class SignInSignOut extends Component {
	state = {
		userExists: false
	};

	// This gets called when your component is mounted
    componentDidMount() {
        // call the AuthStatus function to see if a user is logged in
       console.log("running authStatus");
       API.AuthStatus().then(res => {
        if (res.data) {
			this.setState({userExists: true});
		} else {
			this.setState({userExists: false});
		}
       }).catch(err => {
        // if err (error), then user isn't logged in
        this.setState({userExists: false});
       });
    };

    handleSignOut() {
    	API.Logout();
    }

	render() {
		return (
			<div className="logInStatus">
				{!this.state.userExists ? (<div className="noUser">Welcome back, <a href="/login">Sign In</a></div>)
				: (<div className="yesUser"><a href="/" onClick={this.handleSignOut}>Sign Out</a></div>)}
			</div>
		)
	}
}

export default SignInSignOut;