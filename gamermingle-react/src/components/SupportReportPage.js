import React from "react";
import { Link } from "react-router-dom";
import "./styles/supportStyles.css"; // Make sure this CSS file has the updated styles you provided
import { Form } from "react-bootstrap";

function ReportPage() {
  const reportContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };

  const reportFormStyles = {
    backgroundColor: "#B185A7",
    border: "2px solid white",
    justifyContent: "center",
    marginBottom: "100px",
    paddingBlock: "30px",
    paddingInline: "25px",
    textAlign: "left",
    color: "white",
    width: "1000px",
  };

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
      <div style={reportContainerStyles}>
        <div className="shadow-lg" style={reportFormStyles}>
          <div className="login-box">
            <div className="col">
              <div className="row">
                <div className="col-md-5">
                  <Form id="report-form">
                    <Form.Group controlId="username" className="mb-3">
                      <Form.Label>Individual you are reporting*</Form.Label>
                      <Form.Control
                        type="username"
                        placeholder="Username"
                        required
                      />
                    </Form.Group>
                  </Form>
                </div>
                <div className="col-md-12">
                  <Form.Group controlId="incident_date">
                    <Form.Label>Date incident started*</Form.Label>
                    <Form.Control
                      type="incident_date"
                      placeholder="MM/DD/YYY"
                      required
                    />
                  </Form.Group>
                </div>
              </div>
            </div>
            <Form>
              <Form.Group controlId="incident" className="mb-3">
                <Form.Label>What happened?*</Form.Label>
                <Form.Control
                  as="textarea"
                  type="username"
                  placeholder="Please be as concise as possible"
                  rows={5}
                  required
                />
              </Form.Group>

              <Form.Group controlId="username" className="mb-3">
                <Form.Label>
                  Your contact information so we can get back to you. We will
                  not share this with anyone.
                </Form.Label>
                <Form.Control
                  type="victim_username"
                  placeholder="Your Username"
                  required
                />
              </Form.Group>
            </Form>
          </div>
          <div className="button-signup-box justify-content-center d-flex pt-3">
            <button className="btn loginpage-btn btn-primary btn-lg">
              <strong>Submit Report</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportPage;
