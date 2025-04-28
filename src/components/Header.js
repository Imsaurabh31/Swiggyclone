import { LOGO_URL } from "../utils/constants";
import {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


 const Header = () => {


const [btnNameReact, setBtnNameReact] = useState("Login");
const onlineStatus = useOnlineStatus();
// console.log("Header Render");

// if no dependency array useEffect is called on every render
// useEffect (() => {
//   console.log("useEffect called");
  
// }, );


// if the dependency array is empty useEffect is called on only
//  initial render means just once.
// useEffect (() => {
//     console.log("useEffect called");
    
// }, []);

// if dependency array is[btnReact] => called everytime 
// btnReact is updated.
useEffect (() => {
  // console.log("useEffect called");
  
}, [btnNameReact]);


    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            alt="app-logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              Online Status: {onlineStatus ? "✅": "❌"}
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
             </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>Cart</li>
            <button className="login" 
            onClick={() => {
             btnNameReact === "Login" 
              ? setBtnNameReact("Logout")
              : setBtnNameReact("Login");
            }}
            >
             {btnNameReact}
            </button>
          </ul>
        </div>
      </div>
    );
  };

 export default Header;