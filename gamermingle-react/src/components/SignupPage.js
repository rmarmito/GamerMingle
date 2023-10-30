import { Form, Button } from "react-bootstrap";
import "./styles/webStyles.css";

function SignupForm() {
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
            <div className="row">
              <div className="col-md-4">
                <Form.Group controlId="username">
                  <Form.Label>
                    Username<span className="required">*</span>:
                  </Form.Label>
                  <Form.Control
                    type="username"
                    placeholder="username"
                    required
                  />
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
                  <Form.Control
                    type="password"
                    placeholder="password"
                    required
                  />
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
              </div>

              <div className="col-md-7">
                <div className="row">
                  <div className="col-md-7">
                    <Form.Group controlId="about">
                      <Form.Label>About You:</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={15}
                        placeholder="tell us about yourself..."
                        className="form-control-md pb-4"
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
          <div className="button-signup-box justify-content-center d-flex pt-3">
            <button className="btn create-btn btn-primary btn-md">
              <strong>Create Account</strong>
            </button>
          </div>
        </div>
      </div>
    </body>
  );
}

export default SignupForm;
