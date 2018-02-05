import React, { Component} from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import API from "../../utils/API";
import Search from "../../components/Search";
import Sizes from "../../components/Sizes";

class Home extends Component {
    hasSearched = false;
    dataOnFile = false;

    state = {
        gender: "",
        brand: "",
        measurement: "",
        results: []
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
                this.dataOnFile = true;
                this.setState({
                    results: res.data
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

                { (!this.hasSearched && !this.dataOnFile )? (<div className="beforeSearch"><Search handleSearch={this.handleSearch} handleInputChange={this.handleInputChange}/></div>)

                : ( (!this.hasSearched && this.dataOnFile) ? (<div className="afterSearchContainer"><div className="afterSearch"><Search handleSearch={this.handleSearch} handleInputChange={this.handleInputChange}/></div><Sizes results={this.state.results}/></div>) : (<div className="afterSearchContainer"><div className="afterSearch"><Search handleSearch={this.handleSearch} handleInputChange={this.handleInputChange}/></div><Sizes results={this.state.results}/></div>) ) }

            </div>
            
        )
    }
}

export default Home;