import React, { Component } from "react";
import API from "../../utils/API";
import "./Sizes.css";

class Sizes extends Component {

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
	render() {
		return (
			<ul>
				<li className="singleItem">
					<img src="https://seeklogo.com/images/A/adidas-logo-9AA835C1C2-seeklogo.com.png" />
					<p>Adidas</p>
					<p>8</p>
				</li>
			</ul>
		)
	}
}
	
export default Sizes;