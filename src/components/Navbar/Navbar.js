import React from "react"
import logo from "../../logo.svg"
import "./navbar.scss"
export default function Navbar() {
    return (
          <nav className="navbar">
<img src={logo} alt="city tours company"/>
<ul className="nav-links">
   <li><a href="/" className="nav-links">Home</a></li> 
   <li><a href="/" className="nav-links">About</a></li> 
   <li><a href="/" className="nav-links active">Tour</a></li> 

</ul>


       </nav>
       
    )
}
