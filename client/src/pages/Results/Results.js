import React, { Component } from "react";
import API from "../../utils/API";
import Sizes from "../../components/Sizes";
import "./Results.css";
import { Link } from "react-router-dom";

class Results extends Component {

	componentDidMount() {
		//function to get results that match the user's search
		// API.getResults()
	}

	render() {
	    return (
	    	<div className="searchBody">   
			    <div className="formContainer">
				<Link to={"/"} style={{ textDecoration: 'none' }}>
                        <h1 className="h1">Size</h1>
                         </Link>    
			        <form>
			        	<input placeholder="article"></input>
			        	<p></p>
			        	<input placeholder="size1"></input>
			        	<p></p>
			        	<input placeholder="size2"></input>
			        	<p></p>
			        	<button className="searchButton">Search</button>
			        </form>
			        <div className="suggestBrand">
			        	<a href="/login">
				        	<p>Can't find a brand?</p>
				        	<p>Let us know!</p>
			        	</a>
			        </div>
			    </div>
			    
			    <div className="itemsContainer">
			    	<Sizes />
			    </div>
	    	</div>
		)
	}
}

export default Results;