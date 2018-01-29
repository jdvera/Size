import React, { Component} from "react";
import "./Home.css";


class Home extends Component {
    


render() {
    return (
        <div className="appBody">
        <div className="navbar">
        <ul className="ul">
                <li className="left"><a href="index.html">Size</a></li>

                <li className="right"><a href>Login</a></li>

                <li className="right"><a href>Sign Up</a></li>
              </ul>
              
        </div>
       
         <div className="search">
         <form>
         <h1 className="h1">Size</h1>
  <input className="input" type="text" name="search" placeholder="What are you looking for?"/>
  <input className="input"type="submit" value="Submit"/>
</form>
        </div>
        
        </div>
        )
    }
}   
export default Home;