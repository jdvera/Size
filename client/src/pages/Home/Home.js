import React, { Component} from "react";
import "./Home.css";


class Home extends Component {
    


render() {
    return (
    <div className="home">
        <div className="navbar">
        <ul>
                <li className="left"><a href="index.html">Size</a></li>

                <li className="right"><a href='#'>Login</a></li>

                <li className="right"><a href="#">Sign Up</a></li>
              </ul>
              
        </div>
       
         <div className="search">
         <form>
         <h1>Size</h1>
  <input type="text" name="search" placeholder="What are you looking for?"/>
  <input type="submit" value="Submit"/>
</form>
        </div>
        
        </div>
        )
    }
}   
export default Home;