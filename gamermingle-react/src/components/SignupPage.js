import { Form } from "react-bootstrap";
import "./styles/webStyles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function SignupForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    discord: "",
    steam: "",
    riotid: "",
    about: "",
    profile_picture: null,
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    const url = "http://localhost:8000/api/create_user/";

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await axios.post(url, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        console.log(response.data);
        setSuccessMessage("Account created successfully!");
        setErrorMessage("");
        setFormData({
          username: "",
          email: "",
          password: "",
          discord: "",
          steam: "",
          riotid: "",
          about: "",
          profile_picture: null,
        });
      } else {
        // non-201 responses
      }
    } catch (error) {
      console.error("Error creating account:", error);
      if (error.response) {
        const errors = error.response.data;
        let errorMessages = [];
        for (const [field, messages] of Object.entries(errors)) {
          // For each field in the errors object, append the field name to its error message
          messages.forEach((message) =>
            errorMessages.push(`${field}: ${message}`)
          );
        }
        // Join all error messages into a single string so we can send display
        setErrorMessage(errorMessages.join(" "));
      } else if (error.request) {
        setErrorMessage("No response received from the server.");
      } else {
        setErrorMessage("An error occurred while setting up the request.");
      }
      setSuccessMessage("");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
    setFormData({ ...formData, profile_picture: file });
  };

  const signupContainerStyles = {
    display: "flex",
    justifyContent: "center",
    paddingTop: "150px",
  };

  const signupBoxStyles = {
    backgroundImage: "radial-gradient(#cf9893, #bc7c9c)",
    border: "10px solid #3b3b58",
    borderRadius: "100px",
    justifyContent: "center",
    marginBottom: "100px",
    paddingBlock: "20px",
    paddingInline: "30px",
    textAlign: "left",
    color: "white",
    height: "100%",
    width: "60%",
    // transform: "scale(0.9)",
  };

  const signupTextStyles = {
    fontWeight: "bold",
    //width: "100%",
  };

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  return (
    <body>
      <div style={signupContainerStyles}>
        <div className="signup-box shadow-lg" style={signupBoxStyles}>
          <p
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Lock In.{" "}
          </p>
          <Form id="signup-form" style={signupTextStyles}>
            {successMessage && (
              <div className="alert alert-success">{successMessage}</div>
            )}
            {errorMessage && (
              <div className="alert alert-danger">{errorMessage}</div>
            )}
            <div className="row">
              <div className="col-md-4">
                <Form.Group controlId="username">
                  <Form.Label>
                    Username<span className="required">*</span>:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="username"
                    required
                    onChange={handleInputChange}
                    value={formData.username}
                  />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>
                    Email<span className="required">*</span>:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    placeholder="youremail@email.com"
                    required
                    onChange={handleInputChange}
                    value={formData.email}
                  />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>
                    Password<span className="required">*</span>:
                  </Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="password"
                    required
                    onChange={handleInputChange}
                    value={formData.password}
                  />
                </Form.Group>
                <Form.Group controlId="confirmPassword">
                  <Form.Label>
                    Confirm Password<span className="required">*</span>:
                  </Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    placeholder="confirm password"
                    required
                    onChange={handleInputChange}
                    value={formData.confirmPassword}
                  />
                </Form.Group>
                <Form.Group controlId="discord">
                  <Form.Label>Discord:</Form.Label>
                  <Form.Control
                    type="text"
                    name="discord"
                    placeholder="Discord username"
                    onChange={handleInputChange}
                    value={formData.discord}
                  />
                </Form.Group>
                <Form.Group controlId="steam">
                  <Form.Label>Steam:</Form.Label>
                  <Form.Control
                    type="text"
                    name="steam"
                    placeholder="Steam username"
                    onChange={handleInputChange}
                    value={formData.steam}
                  />
                </Form.Group>
                <Form.Group controlId="riotid">
                  <Form.Label>Riot ID:</Form.Label>
                  <Form.Control
                    type="text"
                    name="riotid"
                    placeholder="Riot ID"
                    onChange={handleInputChange}
                    value={formData.riotid}
                  />
                </Form.Group>
              </div>

              <div className="col-md-7">
                <div className="row">
                  <div className="col-md-7">
                    <Form.Group controlId="about">
                      <Form.Label>About You:</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="about"
                        rows={17}
                        placeholder="tell us about yourself..."
                        className="form-control-md pb-4"
                        onChange={handleInputChange}
                        value={formData.about}
                      />
                    </Form.Group>
                  </div>

                  <div className="col-md-5">
                    <Form.Group controlId="profile_picture">
                      <Form.Label>Profile Picture:</Form.Label>
                      <br />
                      <div className="d-flex justify-content-center border mb-3">
                        <img
                          src={
                            imagePreview ||
                            process.env.PUBLIC_URL +
                              "/images/logo-gamermingle.png"
                          }
                          alt="Profile Placeholder"
                          className="mr-2"
                          style={{ maxWidth: "200px", maxHeight: "200px" }}
                        />
                      </div>

                      <div className="mb-3 input-group">
                        <input
                          type="file"
                          className="form-control"
                          id="inputGroupFile02"
                          onChange={handleFileChange}
                        />
                        <label
                          className="input-group-text"
                          htmlFor="inputGroupFile02"
                        >
                          Upload
                        </label>
                      </div>
                    </Form.Group>
                  </div>
                </div>
              </div>
            </div>
          </Form>
          <div
            type="submit"
            className="button-signup-box justify-content-center d-flex pt-3"
          >
            <button
              className="btn create-btn btn-primary btn-md"
              onClick={handleSubmit}
            >
              <strong>Create Account</strong>
            </button>
          </div>
        </div>
      </div>
    </body>
  );
}

export default SignupForm;
