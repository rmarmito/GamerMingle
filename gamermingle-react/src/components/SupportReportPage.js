import React from "react";
import { Link } from "react-router-dom";
import "./styles/supportStyles.css"; // Make sure this CSS file has the updated styles you provided

function ReportPage() {
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
        className="display-4 text-light text-center pt-0"
        style={{ fontWeight: "bold" }}
      >
        Report Form
      </h2>
      <p className="text-center text-light">
        We take the privacy, safety, and comfort of our community very
        seriously. <br />
        See our Conduct Policy by clicking here.
      </p>
    </div>
  );
}

export default ReportPage;
