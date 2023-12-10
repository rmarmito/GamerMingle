import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import { useAuth } from './AuthContext'; 
import "./styles/webStyles.css";

function ProfileEditPage() {
  const [isFormInitialized, setIsFormInitialized] = useState(false);
  const { token } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirm: '',
    discord: '',
    steam: '',
    riotid: '',
    about: '',
  });
  const profileContainerStyles = {
    display: "flex",
    justifyContent: "right",
    paddingTop: "150px",
    paddingBottom: "100px",
    height: "100vh",
  };
  const boxStyles = {
    backgroundImage: "radial-gradient(#cf9893, #bc7c9c)",
    border: "10px solid #3b3b58",
    borderRadius: "10px",
    // marginBottom: "100px",
    padding: "25px",
    color: "white",
    width: "500px",
    height: "100%",
    overflowY: "auto", // Enable vertical scroll if content overflows
  };

  const mediaBoxStyles = {
    backgroundImage: "radial-gradient(#cf9893, #bc7c9c)",
    border: "10px solid #3b3b58",
    borderRadius: "100px",
    padding: "50px",
    color: "white",
    width: "100%",
    maxWidth: "500px",
    height: "100%",
  };

  useEffect(() => {
    const getCurrentUserLoggedIn = async () => {
      if (!token || isFormInitialized) return; // Check if form is already initialized

      try {
        const response = await axios.get('http://localhost:8000/api/current_user_logged_in/', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setFormData({
          username: response.data.username,
          email: response.data.email,
          discord: response.data.discord,
          steam: response.data.steam,
          riotid: response.data.riotid,
          about: response.data.about,
        });
        setIsFormInitialized(true); // Set flag to true after initializing form
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };

    getCurrentUserLoggedIn();
  }, [token, isFormInitialized]); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log('Field changed:', name, 'Value:', value);
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('http://localhost:8000/api/current_user_logged_in/', formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log('Profile updated:', response.data);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col" style={profileContainerStyles}>
          <div className="profile-info-container" style={boxStyles}>
            <Form onSubmit={handleSubmit}>
              <div className="align-items-center justify-contents-center">
                
                {/* Form group for username */}
                <Form.Group controlId="username">
                  <Form.Label>
                    Username:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="username"
                    value={formData.username}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                {/* Form group for email */}
                <Form.Group controlId="email">
                  <Form.Label>
                  Email:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    placeholder="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                {/* Form group for discord */}
                <Form.Group controlId="discord">
                  <Form.Label>Discord:</Form.Label>
                  <Form.Control
                    type="text"
                    name="discord"
                    placeholder="discord"
                    value={formData.discord}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                {/* Form group for steam */}
                <Form.Group controlId="steam">
                  <Form.Label>Steam:</Form.Label>
                  <Form.Control
                    type="text"
                    name="steam"
                    placeholder="steam"
                    value={formData.steam}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                {/* Form group for riotid */}
                <Form.Group controlId="riotid">
                  <Form.Label>Riot ID:</Form.Label>        
                  <Form.Control
                      type="text"
                      name="riotid"
                      placeholder="riotid"
                      value={formData.riotid}
                      onChange={handleInputChange}
                    />
                </Form.Group>
                <div className="pt-3 text-center">
                  <button type="submit" className="btn signup-btn btn-primary m-0 shadow">
                    <strong>Update Profile</strong>
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
        <div className="col" style={profileContainerStyles}>
          <div className="row align-items-center">
            <div className="col">
              <div className="profile-picture-container" style={mediaBoxStyles}>
                <Form.Group controlId="profilePicture">
                  <Form.Label>
                    {" "}
                    <strong className="fs-5">Profile Picture:</strong>
                  </Form.Label>
                  <br />
                  <div className="d-flex justify-content-center border mb-3">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/logo-gamermingle.png"
                      }
                      alt="Profile Placeholder"
                      className="mr-2"
                      style={{ maxWidth: "200px", maxHeight: "75px" }}
                    />
                  </div>

                  <div className="mb-3 input-group">
                    <input
                      type="file"
                      className="form-control"
                      id="inputGroupFile02"
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
            <div className="w-100"></div>
            <div className="col">
              <div
                className="profile-media-container"
                style={{ ...mediaBoxStyles, marginTop: "5px" }}
              >
                <Form.Group controlId="profileMedia">
                  <Form.Label>
                    <strong className="fs-5">Media Content:</strong>
                  </Form.Label>
                  <br />
                  <div className="d-flex justify-content-center border mb-3">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/logo-gamermingle.png"
                      }
                      alt="Profile Placeholder"
                      className="mr-2"
                      style={{ maxWidth: "200px", maxHeight: "75px" }}
                    />
                  </div>

                  <div className="mb-3 input-group">
                    <input
                      type="file"
                      className="form-control"
                      id="inputGroupFile02"
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
      </div>
    </div>
  );
}

export default ProfileEditPage;
