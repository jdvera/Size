import React, { Component} from "react";
import "./Home.css";
import API from "../../utils/API";
import Search from "../../components/Search";
import Sizes from "../../components/Sizes";

class Home extends Component {

    state = {
        type: "",
        gender: "",
        brand: "",
        shoe: "",
        bust: "",
        waist: "",
        hips: "",
        results: [],
        hasSearched: false,
        dataOnFile: false,
        errorMessage: "",
        showLogo: true,
        showLoading: false
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
            [name]: value,
            hasSearched: false,
            dataOnFile: false
        }, this.checkLogo);
    };

    checkLogo = () => {
        if(this.state.type === "dresses") {
            this.setState({
                showLogo: false
            });
        }
    }

    handleSearch = event => {
        event.preventDefault();
        this.setState({
            hasSearched: true,
            showLogo: false,
            showLoading: true
        }, () => {
            console.log("--- handleSearch, first setState ---");
            if (this.state.type === "shoes") {
                // field validation
                if (!this.state.shoe || !this.state.gender) {
                    this.setState({ errorMessage: "Please input gender & foot size."});
                }
                else {
                    if (this.state.brand) {
                        API.getShoes({
                            brand: this.state.brand,
                            gender: this.state.gender,
                            shoe: this.state.shoe
                        }).then(res => {
                            console.log(res.data);
                            this.setState({ results: [res.data], hasSearched: true, dataOnFile: false, showLoading: false });
                            console.log(this.state);
                        }).catch(err => console.log(err));
                    }
                    else {
                        console.log("--- No Brand, making API call ---");
                        API.getShoesWithoutBrand({
                            gender: this.state.gender,
                            shoe: this.state.shoe
                        }).then(res => {
                            console.log("--- API response below ---")
                            console.log(res.data);
                            this.setState({ results: res.data, hasSearched: true, dataOnFile: false, showLoading: false }, () => console.log("--- handleSearch, second setState ---", this.state));
                        }).catch(err => console.log(err));
                    }
                }
            }
            else if (this.state.type === "dresses") {
                // field validation
                if (!this.state.bust || !this.state.waist || !this.state.hips) {
                    this.setState({ errorMessage: "Please input all measurements."});
                }
                else {
                    if (this.state.brand) {
                        API.getDresses({
                            brand: this.state.brand,
                            bust: this.state.bust,
                            waist: this.state.waist,
                            hips: this.state.hips
                        }).then(res => {
                            console.log(res.data);
                            this.setState({ results: [res.data], hasSearched: true, dataOnFile: false, showLoading: false });
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
                            this.setState({ results: res.data, hasSearched: true, dataOnFile: false, showLoading: false });
                            console.log(this.state);
                        }).catch(err => console.log(err));
                    }
                }
            }
        });
    };

    render(){
        const noSearch = !this.state.hasSearched;
        const hasData = this.state.dataOnFile;
        return (
            <div className="page-wrapper">
                <div className={(noSearch) ? "" : "afterSearch"}>
                    <Search type={this.state.type} showLogo={this.state.showLogo} handleSearch={this.handleSearch} handleInputChange={this.handleInputChange} />
                </div> 
                <div className="h3">{this.state.errorMessage}</div>
                {(!noSearch ? <Sizes results={this.state.results} showLoading={this.state.showLoading}/> : "")}
                {(hasData ? <Sizes results={this.state.results} showLoading={this.state.showLoading}/> : "")}
            </div>
        );
    }
}

export default Home;