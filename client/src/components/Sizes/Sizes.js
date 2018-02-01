import React, { Component } from "react";
import API from "../../utils/API";
import "./Sizes.css";

const Sizes = props =>
	
	<div className="searchBody">   
	    <div className="itemsContainer">
			<ul>
				{props.results.length ? props.results.map(item => 
                    <li className="singleItem">
                        <img src={item.Logo.imageUrl} />
                        <p>{item.Logo.brand}</p>
                        <p>{item.size}</p>
                    </li>)
				: <li>😭<br/>No Results</li>}
			</ul>
		</div>
	</div>
	
export default Sizes;
