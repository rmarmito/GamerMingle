import React from "react";
import { Link } from "react-router-dom";
import "./styles/supportStyles.css"; // Make sure this CSS file has the updated styles you provided
import { Form } from "react-bootstrap";

function ContactPage() {
  const contactContainerStyles = {
    display: "flex",
    justifyContent: "left",
    paddingLeft: "30px",
  };

  const contactFormStyles = {
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
        <Link to="/support">
          <button className="btn support-back-btn btn-primary btn-lg">
            <strong>Back to Support</strong>
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
            marginTop: "-80px", // Adjust this value to move the logo higher
            alignItems: "center",
          }}
          alt="Logo"
          className="img-fluid mr-2"
        />
      </div>

      <h2
        className="display-3 text-light text-left"
        style={{ fontWeight: "bold", paddingLeft: "30px" }}
      >
        Don't worry,
        <br />
        we won't leave you on read.
      </h2>
      <p
        className=" text-left text-light text-left"
        style={{ fontWeight: "bold", paddingLeft: "30px" }}
      >
        We just need a few information.
      </p>

      <div style={contactContainerStyles}>
        <div className="shadow-lg" style={contactFormStyles}>
          <div className="login-box">
            <div className="col">
              <div className="row">
                <div className="col-md-5 fw-bold">
                  <Form.Group controlId="name.Contact" className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="namecontact"
                      placeholder="First and Last Name"
                      required
                    />
                  </Form.Group>
                </div>
                <div className="col-md-7 fw-bold">
                  <Form.Group controlId="email.Contact">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="emailcontact"
                      placeholder="youremail@email.com"
                      required
                    />
                  </Form.Group>
                </div>
              </div>
            </div>
            <Form.Group controlId="inquiry.Contact" className="mb-3 fw-bold">
              <Form.Label>What's on your mind?</Form.Label>
              <Form.Control
                as="textarea"
                type="inquirycontact"
                placeholder="Please be as concise as possible"
                rows={5}
                required
              />
            </Form.Group>
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

export default ContactPage;
