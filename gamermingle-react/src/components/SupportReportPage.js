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

      <div className="report-form-container">
        <form className="report-form">
          <label>
            Individual you are reporting:
            <input
              type="text"
              name="reportedIndividual"
              placeholder="First & Last Name"
            />
          </label>
          <label>
            Date incident started:
            <input
              type="text"
              name="incidentDate"
              placeholder="First & Last Name"
            />
          </label>
          <label>
            What happened?
            <textarea
              name="incidentDetails"
              placeholder="Please be as concise as possible."
            ></textarea>
          </label>
          <label>
            Your personal contact info so we can get back to you.
            <input
              type="text"
              name="contactInfo"
              placeholder="First & Last Name"
            />
            <input
              type="email"
              name="contactEmail"
              placeholder="youremail@email.com"
            />
          </label>
          <input type="submit" value="Submit Report" />
        </form>
      </div>
    </div>
  );
}

export default ReportPage;
