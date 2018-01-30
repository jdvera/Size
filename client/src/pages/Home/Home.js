import React, { Component} from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import API from "../../utils/API";
import Search from "../../components/Search";


class Home extends Component {
    


render() {
    return (
        <div className="appBody">
        <div className="navbar">
        <ul className="ul">
                <li className="left"><Link to={"/"} style={{ textDecoration: 'none' }}>
                <h3 className="h1">Size</h3>
                 </Link>
                 </li>

                <li className="right">
                <Link to={"/login"} style={{ textDecoration: 'none', color: 'orange'}}>
                Login
                </Link>
                </li>

                <li className="right"><Link to={"/signup"} 
                    style={{ textDecoration: 'none', color: 'orange' }}>
                Sign Up
                </Link>
                </li>
              </ul>
              
        </div>
       
         <div className="search">

        <form className="form">
                <Link to={"/"}style={{ textDecoration: 'none' }}>
                <h1 className="h1">Size</h1>
                </Link>
         
         
        <label  for="clothingtype"> Clothing type </label>
         <select className="selection"id="clothingtype" name="clothingtype">
        <option value="shoes"> Shoes</option>
         </select>
        

        
         <label  for="brand"> Brand </label>
         <select className="selection" id="brand" name="brand">
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

       
         <input type="radio" name="gender" value="male"/> Male
        <input type="radio" name="gender" value="female"/> Female
         <input type="radio" name="gender" value="other"/> Other
         <br/>
       

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
                        <li className="left"><Link to={"/"}><h3 className="h1">Size</h3></Link></li>
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