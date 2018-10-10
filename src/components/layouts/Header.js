import React from "react";
import PropTypes from "prop-types";
// import "./CSS/contact.css";  importing separate CSS file
import { Link } from "react-router-dom";

const Header = props => {
  const { branding } = props;

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {branding}
        </Link>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              {/* <a href="/" className="nav-link">
                Home
              </a> */}
              <Link to="/" className="nav-link">
                <i className="fas fa-home">Home</i>
              </Link>
            </li>
            <li className="nav-item">
              {/* <a href="/" className="nav-link">
                Home
              </a> */}
              <Link to="/about" className="nav-link">
                <i className="fas fa-question">About</i>
              </Link>
            </li>
            <li className="nav-item">
              {/* <a href="/" className="nav-link">
                Home
              </a> */}
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus">Add</i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

// CSS Styling React
// const headingStyle = {
//   color: "red",
//   fontSize: "50px"
// };

export default Header;
