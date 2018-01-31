import React, { Component } from "react";
import API from "../../utils/API";
import "./Sizes.css";

const Sizes = props =>

	//make get request
	//set state to item

	//render
	//add this code inside ul. It will repeat for every item in database
	//this.state.item.map(item => 
	// <li className="singleItem">
	// 	<img src="https://seeklogo.com/images/A/adidas-logo-9AA835C1C2-seeklogo.com.png" />
	// 	<p>Adidas</p>
	// 	<p>8</p>
	// </li>
	
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
