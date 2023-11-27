import React from "react";
import { Link } from "react-router-dom";
import "./styles/supportStyles.css"; // Make sure this CSS file has the updated styles you provided

function ContactPage() {
  return (
    <div className="support-container2">
      <div className="back-btn">
        <Link to="/">
          <button className="btn support-back-btn btn-primary btn-lg">
            <strong>Back to GamerMingle</strong>
          </button>
        </Link>
      </div>
      <div className="support-splash-title">
        <img
          src={process.env.PUBLIC_URL + "/images/logo-gamermingle.png"}
          style={{
            width: "100px",
            height: "100px",
            margin: "0px",
            alignItems: "center",
          }}
          alt="Logo"
          className="img-fluid mr-2"
        />
      </div>

      <h2
        className="display-4 text-light text-left"
        style={{ fontWeight: "bold" }}
      >
        Don't Worry,
        <br />
        we won't leave you on read.
      </h2>
      <p className="text-center text-light text-left">
        We just need a few information.
      </p>
    </div>
  );
}

export default ContactPage;
