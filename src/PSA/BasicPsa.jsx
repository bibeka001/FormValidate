import React from "react";
import {Link} from "react-router-dom"
const BasicPsa = () => {
  return (
    <div>
      <h1>Hello Form Handling</h1>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <a href="/home" className=" navbar-brand" />
        <div className="ml-auto">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
 
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default BasicPsa;
