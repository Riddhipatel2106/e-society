import React from "react";
import PropTypes from 'prop-types'; // Import PropTypes
import hamburgermenu from "../../image/hamburgermenu.png";
import { Link } from "react-router-dom";

export const UserNavbar = ({ toggleSidebar }) => {
  return (
    <nav className="app-header navbar navbar-expand bg-body">
      {/*begin::Container*/}
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link btn btn-light"
              href="#"
              role="button"
              style={{
                color: "black",
                padding: "5px 10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
              onClick={toggleSidebar}
            >
              <img src={hamburgermenu} style={{height:"25px",width:"25px"}}></img>
            </a>
          </li>
          <li className="nav-item d-none d-md-block">
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item d-none d-md-block">
            <a href="#" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
// Prop type validation for the toggleSidebar prop
UserNavbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired, // Ensures toggleSidebar is passed as a function
};
