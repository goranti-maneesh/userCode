import React from "react";
import { Link } from "react-router-dom";
import './Header.css';



const Header = ({cartItems}) =>{



return(

  <header >
      <div className="header">
          <h1 >
           <Link to="/home" className="logo">
               Books shop
            </Link> 
          </h1>
          <div className="sub-headd-container">
                <ul>
                  <li>
                      <Link to="/Home">Home</Link>
                  </li>
                </ul>
                
                <ul> 
                  <li>
                      <Link to="/Admin">Admin</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                      <Link to="/Cart">Cart {cartItems.length}</Link>
                  </li>
                </ul>

           </div>

      </div>
     

    
   
 </header>
 )
}

export default Header;




