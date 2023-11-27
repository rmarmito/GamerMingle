import "./styles/supportStyles.css";
import { Link } from "react-router-dom";

function SupportPage() {
  const supportSplashContainer = {
    paddingTop: "2.5%",
    justifyContent: "center",
    height: "100%",
  };
  return (
    <div className="support-container">
      <div className="back-btn">
        <Link to="/">
          <button className="btn support-back-btn btn-primary btn-lg">
            <strong>Back to GamerMingle</strong>
          </button>
        </Link>
      </div>

      <div className="supportSplashContainer" style={supportSplashContainer}>
        <div className="support-splash-title">
          <img
            src={process.env.PUBLIC_URL + "/images/logo-gamermingle.png"}
            style={{
              width: "150px",
              height: "150px",
              margin: "30px",
              alignItems: "center",
            }}
            alt="Logo"
            className="img-fluid mr-2"
          />
        </div>
        <h2
          className="display-1 text-light text-center pt-3"
          style={{ fontWeight: "bold" }}
        >
          We're here to help.
        </h2>
        <div className="d-flex justify-content-center align-items-center">
          <div
            class="input-group rounded custom-fw"
            style={{ alignItems: "center" }}
          >
            <input
              type="search"
              class="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
          </div>
        </div>

        <p className="text-center text-light pt-3 font-weight-bold">
          Ask us anything, report bad things, or contact us.
        </p>
        <div className="d-flex justify-content-center">
          <div class="btn-group btn-group-lg " role="group" aria-label="...">
            <button
              type="button"
              class="btn btn-support1 btn-lg custom-btn-size"
            >
              FAQ
            </button>
            <button
              type="button"
              class="btn btn-support2 btn-lg custom-btn-size"
            >
              Feedback
            </button>
            <Link to="/report">
              <button
                type="button"
                class="btn btn-support3 btn-lg custom-btn-size"
              >
                Report
              </button>
            </Link>
            <button
              type="button"
              class="btn btn-support4 btn-lg custom-btn-size"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportPage;
