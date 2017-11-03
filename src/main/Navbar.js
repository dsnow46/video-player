import React from "react";
import {Link} from "react-router-dom";

function Navbar(props){
  return(
    <div className="navbar">
      <Link to="/" className="links">Home</Link>
      <Link to="/popular" className="links">Popular</Link>
      <Link to="/submit" className="links">Submit</Link>
    </div>
  )
}

export default Navbar;
