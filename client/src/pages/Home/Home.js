import React, { Component} from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import API from "../../utils/API";
import Search from "../../components/Search";
import Sizes from "../../components/Sizes";


class Home extends Component {
    hasSearched = false;

    state = {
        gender: "",
        brand: "",
        measurement: ""
    };
    
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSearch = event => {
        event.preventDefault();
        this.hasSearched = true;
        
        if (this.state.brand) {
            API.getSizes(this.state)
               .then(res => {
                //figure out how to display res on this page
               })
               .catch(err => console.log(err));
        }
        else {
            API.getSizesWithoutBrand(
                    {
                        gender: this.state.gender,
                        measurement: this.state.measurement
                    }
               )
               .then(res => {
                //figure out how to display res on this page
               })
               .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div className="appBody">
                <div className="navbar">
                    <ul className="ul">
                        <li className="right"><Link to={"/login"} style={{ textDecoration: 'none', color: 'orange'}}>Login</Link></li>
                        <li className="right"><Link to={"/signup"} style={{ textDecoration: 'none', color: 'orange'}}>Sign Up</Link></li>
                    </ul>
                </div>

                {!this.hasSearched ? (<div className="beforeSearch"><Search handleSearch={this.handleSearch} handleInputChange={this.handleInputChange}/></div>)
                : (<div><div className="afterSearch"><Search handleSearch={this.handleSearch} handleInputChange={this.handleInputChange}/></div><Sizes /></div>)}
            </div>
            
        )
    }
}

export default Home;