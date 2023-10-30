import React from "react";
import { Link } from "react-router-dom";
import "./styles/webStyles.css";

function SplashPage() {
  return (
    <div className="universal-background">
      <div className="container text-center text-light">
        <div className="title-text">
          <h1 className="display-1" style={{ fontWeight: "bold" }}>
            <strong>Find Your Duo</strong>
          </h1>
          <h2 className="h1" style={{ fontWeight: "bold" }}>
            Or Trio. Or Squad.
          </h2>
          <h3 className="h3" style={{ fontWeight: "bold", fontSize: "20px" }}>
            We don't judge.
          </h3>
        </div>

        <div>
          <Link to="/signup">
            <button
              className="btn signup-btn btn-primary btn-lg shadow"
              style={{ fontSize: "36px", py: "15px", px: "30px" }}
            >
              <strong>Sign Up Now</strong>
            </button>
          </Link>
          <br />
          <Link to="/login" style={{ fontSize: "15px" }}>
            <button type="button" class="btn btn-secondary login-btn shadow-lg">
              or log in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SplashPage;
