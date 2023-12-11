import React from "react";
import { Link } from "react-router-dom";
import "./styles/supportStyles.css";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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
    width: "75%",
  };

  const reportBoxStyles = {
    backgroundColor: "#B185A7",
    borderRadius: "20px",
    border: "2px solid white",
    justifyContent: "center",
    paddingInline: "20px",
    marginTop: "100px",
    marginBottom: "100px",
    marginLeft: "2%",
    textAlign: "center",
    color: "white",
    width: "20%",
    height: "200px",
    overflow: "auto",
  };

  const redirectButtonStyles = {
    borderRadius: "15px",
    borderColor: "black",
    backgroundColor: "#a96da3",
    color: "white",
  };

  const categoryOptions = [
    "Career Opportunities",
    "Bug/Problem",
    "General Inquiry",
    "Other",
  ].map((category) => (
    <option key={category} value={category}>
      {category}
    </option>
  ));

  const staffOptions = ["Richard", "Kevin", "Tuong", "Leon", "Ian", "N/A"].map(
    (staff) => (
      <option key={staff} value={staff}>
        {staff}
      </option>
    )
  );

  let navigate = useNavigate();

  const redirectToReport = () => {
    navigate("/report");
  };

  const redirectToFeatureRequest = () => {
    navigate("/feedback");
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
            marginTop: "-80px",
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
        style={{ fontWeight: "bold", paddingLeft: "30px", marginBottom: "0px" }}
      >
        We just need some information.
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

            <div className="col">
              <div className="row">
                <div className="col-md-5 fw-bold">
                  <Form.Group
                    controlId="category.Contact"
                    className="mb-3 fw-bold"
                  >
                    <Form.Label>
                      How would you categorize this message?
                    </Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                      <option disabled>Choose...</option>
                      {categoryOptions}
                    </Form.Control>
                  </Form.Group>
                </div>
                <div className="col-md-7 fw-bold">
                  <Form.Group
                    controlId="category.Contact"
                    className="mb-3 fw-bold"
                  >
                    <Form.Label>
                      Is there a specifc staff member you are trying to reach?
                    </Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                      <option disabled>Choose...</option>
                      {staffOptions}
                    </Form.Control>
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
                rows={3}
                required
              />
            </Form.Group>
          </div>
          <div className="button-signup-box justify-content-center d-flex pt-3">
            <button className="btn loginpage-btn btn-primary btn-lg">
              <strong>Submit Message</strong>
            </button>
          </div>
        </div>
        <div style={reportBoxStyles}>
          <p className="pt-3 fw-bold">Can't find what you are looking for?</p>
          <button
            style={redirectButtonStyles}
            className="mb-2"
            onClick={redirectToReport}
          >
            Report Someone
          </button>
          <br />
          <button
            style={redirectButtonStyles}
            onClick={redirectToFeatureRequest}
          >
            Request a Feature
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
