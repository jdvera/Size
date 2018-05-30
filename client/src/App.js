import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn"
import SignUp from "./pages/SignUp"
import NoMatch from "./pages/NoMatch";

class App extends Component {
  render() {
    return (
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={LogIn} />
					<Route exact path="/signup" component={SignUp} />
					<Route component={NoMatch} />
				</Switch>
			</Router>
    );
  }
}

export default App;
