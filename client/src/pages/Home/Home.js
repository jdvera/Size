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
        <form className="form">
         <h1 className="h1">Size</h1>

         <label for="clothingtype">Clothing Type</label>
        <select id="clothingtype" name="clothingtype">
        <option value="shoes">Shoes</option>
        </select>

        <label for="brand">Brand</label>
        <select id="brand" name="brand">
        
       
        
       
        <option value="vans">Vans</option>
        <option value="stevemadden">Steve Madden</option>
        <option value="underarmor">Under Armor</option>
        
        <option value="dcshoes">DCShoes</option>
        <option value="reebok">Reebok</option>
        
        <option value="bcbg">BCBG</option>
        <option value="puma">Puma</option>

        <option value="adidas">Adidas</option>
        <option value="asics">Asics</option>
        <option value="converse">Converse</option>
        <option value="newbalance">NewBalance</option>
        <option value="nike">Nike</option>
        <option value="ninewest">NineWest</option>

        </select>


        
  <input className="input" type="text" name="search" placeholder="What are you looking for?"/>
  <input className="input"type="submit" value="Submit"/>
</form>
        </div>
        
        </div>
        )
    }
}   
export default Home;