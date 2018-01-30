import React, { Component} from "react";
import "./Home.css";


class Home extends Component {
    


render() {
    return (
        <div className="appBody">
        <div className="navbar">
        <ul className="ul">
                <li className="left"><a href="index.html"><h3 className="h1">Size</h3></a></li>

                <li className="right"><a href>Login</a></li>

                <li className="right"><a href>Sign Up</a></li>
              </ul>
              
        </div>
       
         <div className="search">
         <form>
         <h1 className="h1">Size</h1>
         <label  for="clothingtype"> Clothing type</label>
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
       

         <label  for="footlength"> Length of Foot</label>
         <select className="selection" id="footlength" name="foodlength">
             <option value="1"> 1 in</option>
             <option value="2"> 2 in</option>
             <option value="3"> 3 in</option>
             <option value="4"> 4 in</option>
             <option value="5"> 5 in</option>
             <option value="6"> 6 in</option>
             <option value="7"> 7 in</option>
             <option value="8"> 8 in</option>
             <option value="9"> 9 in</option>
             <option value="10"> 10 in</option>
             <option value="11"> 11 in</option>
             <option value="12"> 12 in</option>
             <option value="13"> 13 in</option>
             <option value="14"> 14 in</option>
             <option value="15"> 15 in</option>
             <option value="16"> 16 in</option>
             <option value="17"> 17 in</option>
             <option value="18"> 18 in</option>
             <option value="19"> 19 in</option>
             <option value="20"> 20 in</option>
         </select>
        
         <label  for="footwidth"> Width of Foot</label>
         <select className="selection" id="footwidth" name="footwidth">
             <option value="1"> 1 in</option>
             <option value="2"> 2 in</option>
             <option value="3"> 3 in</option>
             <option value="4"> 4 in</option>
             <option value="5"> 5 in</option>
             <option value="6"> 6 in</option>
             <option value="7"> 7 in</option>
             <option value="8"> 8 in</option>
             <option value="9"> 9 in</option>
             <option value="10"> 10 in</option>
             <option value="11"> 11 in</option>
             <option value="12"> 12 in</option>
             <option value="13"> 13 in</option>
             <option value="14"> 14 in</option>
             <option value="15"> 15 in</option>
             <option value="16"> 16 in</option>
             <option value="17"> 17 in</option>
             <option value="18"> 18 in</option>
             <option value="19"> 19 in</option>
             <option value="20"> 20 in</option>
         </select>
         <br/>

         <input className="input"type="submit" value="Submit"/>
        </form>
        </div>
        
        </div>
        )
    }
}   
export default Home;