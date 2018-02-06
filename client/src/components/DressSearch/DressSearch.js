import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignIn_SignOut from "../SignIn_SignOut";

const DressSearch = props =>
	
    <div>       
        <select className="selection" id="brand" name="brand" onChange={props.handleInputChange}>
            <option value="">  Brand (optional)</option>
            <option value="14"> ASOS</option>
            <option value="15"> Calvin Klein</option>
            <option value="16"> Ralph Lauren</option>
            <option value="17"> Zara</option>
            <option value="18"> H&M</option>
            <option value="19"> Michael Kors</option>
            <option value="20"> Adrianna Papell</option>
        </select>
        <br/>

        <input placeholder="Chest Width (in Inches)" type="text" className="footSize" id="chestWidth" name="bust" onChange={props.handleInputChange}></input>
                <br/>
                <input placeholder="Waist Width (in Inches)" type="text" className="footSize" id="waistWidth" name="waist" onChange={props.handleInputChange}></input>
                <br/>
                <input placeholder="Hip Width (in Inches)" type="text" className="footSize" id="hipWidth" name="hips" onChange={props.handleInputChange}></input>
                <br/>

    </div>

export default DressSearch;