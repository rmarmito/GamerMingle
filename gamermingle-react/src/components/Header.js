import "./styles/customNavbar.css";
import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Import useAuth

function Navbar() {
  const { isAuthenticated, logout } = useAuth(); // Use isAuthenticated and logout from AuthContext
  const currentLocation = useLocation(); // Define currentLocation using useLocation hook

  const navigate = useNavigate(); // Define navigate using useNavigate hook
  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to home page after logging out
  };

  const headerStyles = {
    backgroundColor: "#3b3b58",
    padding: 10,
  };

  const isHomeActive =
    currentLocation.pathname === "/" ||
    (isAuthenticated && currentLocation.pathname === "/activity");

  return (
    <div
      className="navbar navbar-expand-md navbar-light fixed-top"
      style={headerStyles}
    >
      <Link
        to="/"
        className="navbar-brand text-light d-flex align-items-center"
        style={{
          fontWeight: "bold",
          fontSize: "36px",
          textDecoration: "none",
          color: "white",
        }}
      >
        <img
          src={process.env.PUBLIC_URL + "/images/logo-gamermingle.png"}
          style={{
            width: "50px",
            height: "50px",
            margin: "10px",
          }}
          alt="Logo"
          className="img-fluid mr-2"
        />
        GamerMingle
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end align-items-end"
        id="navbarSupportedContent"
      >
        <ul
          className="nav nav-tabs"
          style={{
            fontWeight: "bold",
            textDecoration: "none",
            paddingRight: "0px",
            color: "white",
          }}
        >
          <li className="nav-item">
            <NavLink
              to={isAuthenticated ? "/activity" : "/"}
              className={`nav-link text-light ${isHomeActive ? "active" : ""}`}
            >
              Home
            </NavLink>
          </li>
          {isAuthenticated && (
            <li className="nav-item">
              <NavLink
                to="/profile"
                className="nav-link text-light "
                activeClassName="active"
              >
                Profile
              </NavLink>
            </li>
          )}
          <li className="nav-item">
            <NavLink
              to="/safety"
              className="nav-link text-light"
              activeClassName="active"
            >
              Safety
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/learn"
              className="nav-link text-light"
              activeClassName="active"
            >
              Learn
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/support"
              className="nav-link text-light"
              activeClassName="active" // Add activeClassName
            >
              Support
            </NavLink>
          </li>
          {!isAuthenticated && (
            <li className="nav-item">
              <NavLink
                to="/signup"
                className="nav-link text-light"
                activeClassName="active" // Add activeClassName
              >
                Sign Up
              </NavLink>
            </li>
          )}
          {isAuthenticated && (
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link text-warning"
                activeClassName="active"
                onClick={handleLogout}
              >
                Log Out
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
