import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";


class App extends Component {
  render() {
    return (
    	<Router>
		    
		    	<Switch>
		    		<Route exact path="/" component={Home} />
		        	<Route exact path="/search" component={Search} />
		        	<Route component={NoMatch} />
		        </Switch>
		    
		</Router>
    );
  }
}

export default App;
