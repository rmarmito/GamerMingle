import React from "react";
import { Link } from "react-router-dom";
import "./styles/supportStyles.css"; // Make sure this CSS file has the updated styles you provided
import { Form } from "react-bootstrap";

function FeedbackPage() {
  const contactContainerStyles = {
    display: "flex",
    justifyContent: "center",
    paddingRight: "30px",
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

  const ratingOptions = [1, 2, 3, 4, 5].map((rating) => (
    <option key={rating} value={rating}>
      {rating}
    </option>
  ));

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
        className="display-3 text-light text-center"
        style={{ fontWeight: "bold", paddingRight: "30px" }}
      >
        Let us know how we can improve
      </h2>

      <div style={contactContainerStyles}>
        <div className="shadow-lg" style={contactFormStyles}>
          <Form className="login-box">
            <div className="row">
              <Form.Group
                controlId="siteSatisfaction.Contact"
                className="mb-3 fw-bold col-md-6"
              >
                <Form.Label>How satisfied are you with our site?</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option disabled>Choose...</option>
                  {ratingOptions}
                </Form.Control>
              </Form.Group>

              <Form.Group
                controlId="serviceQuality.Contact"
                className="mb-3 fw-bold col-md-6"
              >
                <Form.Label>How would you rate the ease of use?</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option disabled>Choose...</option>
                  {ratingOptions}
                </Form.Control>
              </Form.Group>
            </div>

            <div className="row">
              <Form.Group
                controlId="overallExperience.Contact"
                className="mb-3 fw-bold col-md-6"
              >
                <Form.Label>Rate your overall experience:</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option disabled>Choose...</option>
                  {ratingOptions}
                </Form.Control>
              </Form.Group>

              <Form.Group
                controlId="navigationEase.Contact"
                className="mb-3 fw-bold col-md-6"
              >
                <Form.Label>
                  How would you rate the ease of navigating our website?
                </Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option disabled>Choose...</option>
                  {ratingOptions}
                </Form.Control>
              </Form.Group>
            </div>

            <div className="row">
              <Form.Group
                controlId="visualAppeal.Contact"
                className="mb-3 fw-bold col-md-6"
              >
                <Form.Label>How visually appealing is our website?</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option disabled>Choose...</option>
                  {ratingOptions}
                </Form.Control>
              </Form.Group>

              <Form.Group
                controlId="recommendationLikelihood.Contact"
                className="mb-3 fw-bold col-md-6"
              >
                <Form.Label>
                  How likely are you to recommend our website to a friend?
                </Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option disabled>Choose...</option>
                  {ratingOptions}
                </Form.Control>
              </Form.Group>
            </div>

            {/* Feature improvement question */}
            <Form.Group
              controlId="featureImprovement.Contact"
              className="mb-3 fw-bold"
            >
              <Form.Label>
                Are there any features you would like to see implemented or
                improved?
              </Form.Label>
              <Form.Control as="textarea" placeholder="Your suggestions here" />
            </Form.Group>

            <Form.Group
              controlId="anonymousComments.Contact"
              className="mb-3 fw-bold"
            >
              <Form.Label>Any other comments?</Form.Label>
              <Form.Control
                as="textarea"
                type="anonymouscommentscontact"
                placeholder="Your anonymous comments here"
              />
            </Form.Group>

            <div className="button-signup-box justify-content-center d-flex pt-3">
              <button className="btn loginpage-btn btn-primary btn-lg">
                <strong>Submit Feedback</strong>
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default FeedbackPage;
