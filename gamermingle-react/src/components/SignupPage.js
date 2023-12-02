import { Form } from "react-bootstrap";
import "./styles/webStyles.css";
import React, { useState } from "react";
import axios from "axios";

function SignupForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    discord: "",
    steam: "",
    riotid: "",
    about: "",
    profilePicture: null,
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
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
          profilePicture: null,
        });
      } else {
        // Handle non-201 responses if needed
      }
    } catch (error) {
      console.error("Error creating account:", error);
      setErrorMessage(
        "Failed to create account. Please try again.",
        error.response.data
      );
      setSuccessMessage("");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
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
    width: "1000px",
    // transform: "scale(0.9)",
  };

  const signupTextStyles = {
    fontWeight: "bold",
    //width: "100%",
  };

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
                    type="text"
                    name="password"
                    placeholder="password"
                    required
                    onChange={handleInputChange}
                    value={formData.password}
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
                        rows={15}
                        placeholder="tell us about yourself..."
                        className="form-control-md pb-4"
                        onChange={handleInputChange}
                        value={formData.about}
                      />
                    </Form.Group>
                  </div>

                  <div className="col-md-5">
                    <Form.Group controlId="profilePicture">
                      <Form.Label>Profile Picture:</Form.Label>
                      <br />
                      <div className="d-flex justify-content-center border mb-3">
                        <img
                          src={
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
