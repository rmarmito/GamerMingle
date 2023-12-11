import { Form } from "react-bootstrap";
import "./styles/webStyles.css";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext.js";

function LoginForm() {
  const { login } = useAuth(); // Get login function

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (e) => {
      if (e) e.preventDefault();
      try {
        const response = await axios.post("http://localhost:8000/api/token/", {
          username: username,
          password: password,
        });
        console.log(response.data);
        localStorage.setItem("token", response.data.access);

        login(response.data.access);
        navigate("/activity");
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          setErrorMessage("Failed to log in. Please check your credentials.");
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      }
    },
    [username, password, login, navigate]
  );

  const loginContainerStyles = {
    display: "flex",
    justifyContent: "center",
    paddingTop: "150px",
  };

  const loginFormStyles = {
    backgroundImage: "radial-gradient(#cf9893, #bc7c9c)",
    border: "10px solid #3b3b58",
    borderRadius: "100px",
    justifyContent: "center",
    marginBottom: "100px",
    paddingBlock: "30px",
    paddingInline: "25px",
    textAlign: "left",
    color: "white",
    width: "500px",
  };

  useEffect(() => {
    // Function to handle key press
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        e.preventDefault(); // Prevent the default action
        handleSubmit();
      }
    };

    // Add event listener for keypress
    window.addEventListener("keypress", handleKeyPress);

    // Cleanup function
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [handleSubmit]);

  return (
    <body>
      <div style={loginContainerStyles}>
        <div className="shadow-lg" style={loginFormStyles}>
          <div className="login-box">
            <strong>
              <p
                style={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  textAlign: "center",
                  margin: "0",
                }}
              >
                Hop On.
              </p>
            </strong>
            {errorMessage && (
              <div className="alert alert-danger">{errorMessage}</div>
            )}

            <Form id="signup-form">
              <Form.Group controlId="username" className="mb-3">
                <Form.Control
                  type="username"
                  placeholder="username"
                  required
                  onChange={handleUsernameChange}
                  value={username}
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Control
                  type="password"
                  placeholder="password"
                  required
                  onChange={handlePasswordChange}
                  value={password}
                />
              </Form.Group>
            </Form>
          </div>
          <div className="button-signup-box justify-content-center d-flex pt-3">
            <button
              type="submit"
              className="btn loginpage-btn btn-primary btn-lg"
              onClick={handleSubmit}
            >
              <strong>Sign In</strong>
            </button>
          </div>
        </div>
      </div>
    </body>
  );
}

export default LoginForm;
