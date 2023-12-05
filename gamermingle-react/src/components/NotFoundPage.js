import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

function NotFoundPage() {
  const { isAuthenticated } = useAuth();

  const missingContainerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
  };

  const foundFormStyles = {
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
    <div style={missingContainerStyles}>
      {" "}
      <div className="shadow-lg align-center" style={foundFormStyles}>
        <div className="login-box">
          <p
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              textAlign: "center",
              margin: "0",
            }}
          >
            The page you are looking for does not exist. <br />
            =(
          </p>
        </div>
        <div className="back-btn pt-5">
          <Link to={isAuthenticated ? "/activity" : "/"}>
            <button className="btn support-back-btn btn-primary btn-lg">
              <strong>Back to GamerMingle</strong>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
