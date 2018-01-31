import React, { Component } from "react";
import API from "../../utils/API";
import "./Sizes.css";

const Sizes = props =>
	
	<div className="searchBody">   
	    <div className="itemsContainer">
			<ul>
				{props.results.map(item => 
                <li className="singleItem">
                    <img src="https://seeklogo.com/images/A/adidas-logo-9AA835C1C2-seeklogo.com.png" />
                    <p>{item.brand}</p>
                    <p>{item.size}</p>
                </li>)}
			</ul>
		</div>
	</div>
	
export default Sizes;
