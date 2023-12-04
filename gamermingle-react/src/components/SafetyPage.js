import { Link } from "react-router-dom";
import "./styles/safetyStyles.css";

function SafetyPage() {
  const boxStyles = {
    backgroundImage: "radial-gradient(#cf9893, #bc7c9c)",
    border: "10px solid #3b3b58",
    borderRadius: "100px",
    marginBottom: "100px",
    padding: "50px",
    color: "white",
    width: "1500px",
    position: "relative",
  };

  const safetyContainerStyles = {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "150px",
    minHeight: "100%",
    position: "relative",
  };

  const topBoxStyles = {
    background: "#3b3b58",
    border: "2px solid #3b3b58",
    borderRadius: "10px",
    position: "absolute",
    padding: "10px",
    top: -30,
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1,
  };

  const strongHighlight = {
    color: "#592E83",
  };

  return (
    <body>
      <div className="safety-container" style={safetyContainerStyles}>
        <div className="container d-flex">
          <div
            className="box shadow-lg"
            style={{ ...boxStyles, marginRight: "30px" }}
          >
            <div
              className="top-box"
              style={{ ...topBoxStyles, textAlign: "center" }}
            >
              <p className="text-light fw-bold fs-5 px-3 mb-0">
                Safety @ GamerMingle
              </p>
            </div>
            <ul>
              <li>
                <strong style={{ ...strongHighlight }}>
                  Avoid Financial Risks:
                </strong>{" "}
                <br />
                Never transfer money via wire, and do not share financial
                details. Report money requests.
              </li>
              <li>
                <strong style={{ ...strongHighlight }}>
                  Guard Your Personal Data:
                </strong>{" "}
                <br />
                Don't share sensitive information like social security numbers
                or addresses. Parents should be extra cautious.
              </li>
              <li>
                <strong style={{ ...strongHighlight }}>
                  Stay within GamerMingle for Initial Conversations:
                </strong>{" "}
                <br />
                Use our chat features for early interactions for added security.
              </li>
              <li>
                <strong style={{ ...strongHighlight }}>
                  Identify and Report Inappropriate Behavior:
                </strong>{" "}
                <br />
                Report violations such as soliciting funds, harassment, fake
                profiles, and more.
              </li>
              <li>
                <strong style={{ ...strongHighlight }}>
                  Secure Your GamerMingle Account:
                </strong>{" "}
                <br />
                Use a strong password and be cautious on public devices. We will
                never ask for your password via email.
              </li>
            </ul>
            <Link to="/report">
              <button className="btn report-btn btn-primary btn-lg">
                <strong>Report Someone</strong>
              </button>
            </Link>

            <br />
          </div>

          <div
            className="box shadow-lg"
            style={{ ...boxStyles, marginLeft: "30px" }}
          >
            <div className="top-box" style={{ ...topBoxStyles }}>
              <p className="text-light fw-bold fs-5 px-3 mb-0">
                Code of Conduct
              </p>
            </div>
            <ol>
              <li>
                <strong style={{ ...strongHighlight }}>
                  Respect for All Members
                </strong>
                <br />
                Treat all members with respect, regardless of their skill level,
                game preferences, age, gender, race, ethnicity, religion, or any
                other characteristic. Abusive language, harassment, bullying,
                and discrimination are strictly prohibited.
              </li>
              <li>
                <strong style={{ ...strongHighlight }}>
                  Positive Gaming Environment
                </strong>
                <br />
                Encourage a supportive atmosphere where all gamers feel welcome.
                Constructive feedback is appreciated; derogatory remarks are
                not.
              </li>
              <li>
                <strong style={{ ...strongHighlight }}>
                  No Spam or Commercial Activity
                </strong>
                <br />
                Refrain from spamming or promoting commercial interests, such as
                selling accounts or in-game items. The platform is for making
                connections, not for commercial transactions.
              </li>
              <li>
                <strong style={{ ...strongHighlight }}>
                  Privacy and Safety
                </strong>
                <br />
                Do not share personal information of others without consent. Be
                cautious about sharing your own personal information.
              </li>
              <li>
                <strong style={{ ...strongHighlight }}>
                  Honesty and Integrity
                </strong>
                <br />
                Be honest in your interactions and intentions. Do not
                impersonate other individuals or create multiple accounts for
                deceptive purposes.
              </li>

              <li>
                <strong style={{ ...strongHighlight }}>
                  Age Appropriate Behavior
                </strong>
                <br />
                Adhere to age ratings of games when forming groups. Be mindful
                of the presence of younger gamers in terms of language and
                content.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </body>
  );
}

export default SafetyPage;
