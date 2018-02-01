import React, { Component } from "react";
import "./Search.css";
import { Link } from "react-router-dom";


const Search = props =>
	<div className="search">
    
        <form className="form">

            <Link to={"/"}style={{ textDecoration: 'none' }}>
                <h1 className="h1">Size</h1>
            </Link>

            <select className="selection"id="clothingtype" name="clothingtype">
                <option> Clothing Type </option>
                <option value="shoes"> Shoes</option>
            </select>
            <br/>
           
            <select className="selection" id="brand" name="brand" onChange={props.handleInputChange}>
                <option value="">  Brand (optional)</option>
                <option value="13"> BCBG </option>
                <option value="3"> Adidas</option>
                <option value="12"> Asics</option>
                <option value="4"> Converse</option>
                <option value="10"> DCShoes</option>
                <option value="8"> New Balance</option>
                <option value="2"> Nike</option>
                <option value="1"> Nine West</option>
                <option value="9"> Puma</option>
                <option value="11"> Reebok</option>
                <option value="6"> Steve Madden</option>
                <option value="7"> Under Armor</option>
                <option value="5"> Vans</option>
            </select>
            <br/>

            <input type="radio" name="gender" value="male" onChange={props.handleInputChange}/> Male
            <input type="radio" name="gender" value="female" onChange={props.handleInputChange}/> Female
            <br/>
   
            <input placeholder="Foot Length (in Inches)" type="text" className="footSize" id="footlength" name="measurement" onChange={props.handleInputChange}></input>
            <br/>

            <button className="searchButton" type="submit" onClick={props.handleSearch}>
                Submit
            </button>
        </form>
    </div>

export default Search;