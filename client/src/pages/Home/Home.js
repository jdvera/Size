import React, { Component} from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import API from "../../utils/API";
import Search from "../../components/Search";
import Sizes from "../../components/Sizes";

class Home extends Component {
    hasSearched = false;

    state = {
        type: "",
        gender: "",
        brand: "",
        measurement: "",
        results: []
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
        
        if (this.state.type == "shoes") {
            if (this.state.brand) {
                API.getShoes({
                    brand: this.state.brand,
                    gender: this.state.gender,
                    measurement: this.state.measurement
                }).then(res => {
                    console.log(res.data);
                    this.setState({ results: res.data });
                    console.log(this.state);
                }).catch(err => console.log(err));
            }
            else {
                API.getShoesWithoutBrand({
                    gender: this.state.gender,
                    measurement: this.state.measurement
                }).then(res => {
                    console.log(res.data);
                    this.setState({ results: res.data });
                    console.log(this.state);
                }).catch(err => console.log(err));
            }
        }
        else if (this.state.type == "dresses") {
            if (this.state.brand) {
                API.getDresses({
                    brand: this.state.brand,
                    bust: this.state.bust,
                    waist: this.state.waist,
                    hips: this.state.hips
                }).then(res => {
                    console.log(res.data);
                    this.setState({ results: res.data });
                    console.log(this.state);
                }).catch(err => console.log(err));
            }
            else {
                API.getDressesWithoutBrand({
                    bust: this.state.bust,
                    waist: this.state.waist,
                    hips: this.state.hips
                }).then(res => {
                    console.log(res.data);
                    this.setState({ results: res.data });
                    console.log(this.state);
                }).catch(err => console.log(err));
            }
        }
    };

    render() {
        return (
            <div className="appBody">

            
                {!this.hasSearched ? (<div className="beforeSearch"><Search handleSearch={this.handleSearch} handleInputChange={this.handleInputChange}/></div>)

                : (<div className="afterSearchContainer"><div className="afterSearch"><Search handleSearch={this.handleSearch} handleInputChange={this.handleInputChange}/></div><Sizes results={this.state.results}/></div>)}

            </div>
            
        )
    }
}

export default Home;