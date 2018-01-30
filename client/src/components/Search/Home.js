import React, { Component} from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import API from "../../utils/API";
import Search from "../../components/Search";


class Home extends Component {

    handleLogin = event => {
        event.preventDefault();
        
        if (this.state.brand) {
            API.getSizes(this.state)
               .then(res => {
                //figure out how to pass res to new page
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
                //figure out how to pass res to new page
               })
               .catch(err => console.log(err));
        }
    }

    render() {
        return (
            <div className="appBody">
                <div className="navbar">
                    <ul className="ul">
                        <li className="left"><Link to={"/"} style={{ textDecoration: 'none' }}>
                        <h3 className="h1">Size</h3>
                         </Link>
                         </li>
                        <li className="right"><Link to={"/login"}>Login</Link></li>
                        <li className="right"><Link to={"/signup"}>Sign Up</Link></li>
                    </ul>
                </div>
               
                <Search />
            </div>
        )
    }
}

export default Home;