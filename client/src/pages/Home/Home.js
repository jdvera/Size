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
        measurement: "",
        results: []
    };
    
    // This gets called when your component is mounted
    componentDidMount() {
        // call the AuthStatus function to see if a user is logged in
       console.log("running authStatus");
       API.AuthStatus().then(res => {
        // if res (no error), then user should exist / is logged in
        console.log("AuthStatus is: ");
        console.log(res);
        // this.setState({auth: true});
       }).catch(err => {
        // if err (error), then user isn't logged in
        console.log("error is: ");
        console.log(err);
        // this.setState({auth: false});
       });
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
            API.getSizes({
                brand: this.state.brand,
                gender: this.state.gender,
                measurement: this.state.measurement
            })
               .then(res => {
                console.log(res.data);
                if(res.data){
                    this.setState({ results: [res.data] });
                }
                else{
                    this.setState({ results: [] });
                }
                console.log(this.state);
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
                console.log(res.data);
                this.setState({ results:res.data });
                console.log(this.state);
               })
               .catch(err => console.log(err));
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