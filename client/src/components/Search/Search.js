import React, { Component } from "react";
import "./Search.css";
import { Link } from "react-router-dom";
import SignIn_SignOut from "../SignIn_SignOut";
import ShoeSearch from "../ShoeSearch";
import DressSearch from "../DressSearch";

const Search = props =>
	<div className="search">
    
        <form className="form">
            <Link to={"/"}style={{ textDecoration: 'none' }}>
                <h1 className="h1">Size</h1>
            </Link>

            <div className="logo">
                <img className = "hanger" src='hanger4.png' alt={"hanger"} />
            </div>

            <select className="selection" id="clothingtype" name="type" onChange={props.handleInputChange}>
                <option> Clothing Type </option>
                <option value="shoes"> Shoes</option>
                <option value="dresses"> Dresses</option>
            </select>
            <br/>
           
            { props.type == "dresses" ? <DressSearch handleInputChange={props.handleInputChange} /> : <ShoeSearch handleInputChange={props.handleInputChange} />}

            <button className="searchButton" type="submit" onClick={props.handleSearch}>
                Submit
            </button>
            <SignIn_SignOut />

        </form>
    </div>

export default Search;


