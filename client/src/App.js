import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";

class App extends Component {
  render() {
    return (
    	<Router>
		    <div className="appBody">
		    	<Switch>
		        	<Route exact path="/" component={Search} />
		        	<Route component={NoMatch} />
		        </Switch>
		    </div>
		</Router>
    );
  }
}

export default App;
