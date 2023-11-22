import { Form } from "react-bootstrap";
import "./styles/webStyles.css";

function LoginForm() {
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
            <Form id="signup-form">
              <Form.Group controlId="username" className="mb-3">
                <Form.Label></Form.Label>
                <Form.Control type="username" placeholder="username" required />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Control type="password" placeholder="password" required />
              </Form.Group>
            </Form>
          </div>
          <div className="button-signup-box justify-content-center d-flex pt-3">
            <button className="btn loginpage-btn btn-primary btn-lg">
              <strong>Sign In</strong>
            </button>
          </div>
        </div>
      </div>
    </body>
  );
}

export default LoginForm;
