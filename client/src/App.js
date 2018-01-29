import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn"
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";



class App extends Component {
  render() {
    return (
    	<Router>
		    
		    	<Switch>
		    		<Route exact path="/" component={Home} />
		    		<Route exact path="/login" component={LogIn} />
		        	<Route exact path="/search" component={Search} />
		        	<Route component={NoMatch} />
		        </Switch>
		    
		</Router>
    );
  }
}

export default App;
