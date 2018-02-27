import React from "react";
import "./Sizes.css";

const Sizes = props =>
	
	<div className="resultsBody">   
	    <div className="itemsContainer">
	    	{props.results.length ? 
				<div className="jamesDiv">
					{props.results.map(item =>
					<div className="singleItem">
						<img alt="Brand Logo" src={item.Logo.fileLocation} />
						<p>{item.Logo.brand}</p>
						<p>{item.size}</p>
					</div> )}
				</div>
			: <div className="singleItem no-results">
				<img alt="Brand Logo" src="logos/cry.png" />
				<p>No Results</p>
				<p></p>
			  </div>}
		</div>
	</div>
	
export default Sizes;
