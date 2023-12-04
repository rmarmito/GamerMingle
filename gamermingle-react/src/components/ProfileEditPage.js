import { Form } from "react-bootstrap";
import "./styles/webStyles.css";

function ProfileEditPage() {
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

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col" style={profileContainerStyles}>
          <div className="profile-info-container" style={boxStyles}>
            <div className="align-items-center justify-contents-center">
              <Form.Group controlId="username">
                <Form.Label>
                  Username<span className="required">*</span>:
                </Form.Label>
                <Form.Control type="username" placeholder="username" required />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>
                  Email<span className="required">*</span>:
                </Form.Label>
                <Form.Control type="email" placeholder="email" required />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>
                  Password<span className="required">*</span>:
                </Form.Label>
                <Form.Control type="password" placeholder="password" required />
              </Form.Group>
              <Form.Group controlId="discord">
                <Form.Label>Discord:</Form.Label>
                <Form.Control type="text" placeholder="Discord username" />
              </Form.Group>
              <Form.Group controlId="steam">
                <Form.Label>Steam:</Form.Label>
                <Form.Control type="text" placeholder="Steam username" />
              </Form.Group>
              <Form.Group controlId="riotid">
                <Form.Label>Riot ID:</Form.Label>
                <Form.Control type="text" placeholder="Riot ID" />
              </Form.Group>
              <Form.Group controlId="about">
                <Form.Label>About You:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="tell us about yourself..."
                  className="form-control-sm"
                />
              </Form.Group>
            </div>
          </div>
        </div>
        <div className="col" style={profileContainerStyles}>
          <div className="row align-items-center">
            <div className="col">
              <div className="profile-picture-container" style={mediaBoxStyles}>
                <Form.Group controlId="profilePicture">
                  <Form.Label>Profile Picture:</Form.Label>
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
                  <Form.Label>Media Content:</Form.Label>
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
