import React, { Component } from "react";
import "./Search.css";
import { Link } from "react-router-dom";


const Search = props =>
	<div className="search">
    
        <form className="form">

            <Link to={"/"}style={{ textDecoration: 'none' }}>
                <h1 className="h1">Size</h1>
            </Link>


            <label  for="clothingtype"></label>
            <select className="selection"id="clothingtype" name="clothingtype">
                <option> Clothing Type </option>
                <option value="shoes"> Shoes</option>
            </select>
            <br/>
           
            <select className="selection" id="brand" name="brand" onChange={props.handleInputChange}>
                <option value="">  Brand (optional)</option>
                <option value="bcbg"> BCBG </option>
                <option value="adidas"> Adidas</option>
                <option value="asics"> Asics</option>
                <option value="converse"> Converse</option>
                <option value="dcshoes"> DCShoes</option>
                <option value="newbalance"> New Balance</option>
                <option value="nike"> Nike</option>
                <option value="ninewest"> Nine West</option>
                <option value="puma"> Puma</option>
                <option value="reebok"> Reebok</option>
                <option value="stevemadden"> Steve Madden</option>
                <option value="underarmor"> Under Armor</option>
                <option value="vans"> Vans</option>
            </select>
            <br/>

            <input type="radio" name="gender" value="male" onChange={props.handleInputChange}/> Male
            <input type="radio" name="gender" value="female" onChange={props.handleInputChange}/> Female
            <br/>
   
            <label  htmlFor="footlength"> Foot Length (in Inches)</label>
            <input type="text" className="selection" id="footlength" name="measurement" onChange={props.handleInputChange}></input>
            <br/>

            <button className="input" type="submit" onClick={props.handleSearch}>
                Submit
            </button>
        </form>
    </div>

export default Search;