import React, { Component } from "react";
import API from "../../utils/API";
import "./Sizes.css";

const Sizes = props =>
	
	<div className="resultsBody">   
	    <div className="itemsContainer">
			<div className="jamesDiv">
				{props.results.length ? props.results.map(item => 
                    <div className="singleItem">
                        <img alt="Brand Logo" src={item.Logo.fileLocation} />
                        <p>{item.Logo.brand}</p>
                        <p>{item.size}</p>
                    </div>)
				: <div>😭<br/>No Results</div>}
			</div>
		</div>
	</div>
	
export default Sizes;
