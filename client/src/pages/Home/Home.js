import React, { Component} from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import API from "../../utils/API";
import Search from "../../components/Search";
import Sizes from "../../components/Sizes";

class Home extends Component {

    state = {
        type: "",
        gender: "",
        brand: "",
        measurement: "",
        bust: "",
        waist: "",
        hips: "",
        results: [],
        hasSearched: false,
        dataOnFile: false
    };

    // get any saved user data
    componentDidMount() {
       API.getSaved()
        .then(res => {
            console.log("Home.js getting saved");
            console.log(res)
            if(res.data){
                console.log("Home.js found user");
                console.log(res.data)
                this.setState({
                    results: res.data,
                    dataOnFile: true
                });
                
                console.log(this.state);
            }
        })
        .catch(err => console.log(err))
    };
    
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state);
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
                    this.setState({ results: res.data, hasSearched: true });
                    console.log(this.state);
                }).catch(err => console.log(err));
            }
            else {
                API.getShoesWithoutBrand({
                    gender: this.state.gender,
                    measurement: this.state.measurement
                }).then(res => {
                    console.log(res.data);
                    this.setState({ results: res.data, hasSearched: true });
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
                    this.setState({ results: res.data, hasSearched: true });
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
                    this.setState({ results: res.data, hasSearched: true });
                    console.log(this.state);
                }).catch(err => console.log(err));
            }
        }
    };

    render(){
        const noSearch = !this.state.hasSearched;
        const hasData = this.state.dataOnFile;
        return (
            <div className={(noSearch) ? "" : "afterSearchConatiner"}>
                <div className={(noSearch) ? "beforeSearch" : "afterSearch"}>
                    <Search type={this.state.type} handleSearch={this.handleSearch} handleInputChange={this.handleInputChange} />
                </div>               
                {(!noSearch ? <Sizes results={this.state.results}/> : "")}
            </div>
        );
    }
}

export default Home;