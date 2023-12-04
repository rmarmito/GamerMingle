import { Link } from 'react-router-dom';
import "./styles/learnStyles.css"; 
import TrendingGamesList from './TrendingGamesList';

function LearnPage() {
  const boxStyles = {
    backgroundImage: "radial-gradient(#cf9893, #bc7c9c)",
    border: "10px solid #3b3b58",
    borderRadius: "100px",
    marginBottom: "100px",
    padding: "50px",
    color: "white",
    width: "1000px",
  };

  const learnContainerStyles = {
    display: "flex",
    paddingTop: "150px",
    justifyContent: "center",
    alignItems: "center",
  };

  // const topBoxStyles = {
  //   background: "white",
  //   border: "2px solid black",
  //   borderRadius: "10px",
  //   position: "absolute",
  //   padding: "10px",
  //   top: 125,
  //   left: "50%",
  //   transform: "translateX(-50%)",
  //   zIndex: 1,
  // };

  return (
    <body>
      <div className="learn-container" style={learnContainerStyles}>
        <div
          className="box shadow-lg justify-content-center"
          style={{ ...boxStyles }}
        >
          <h3 className="fs-1 fw-bold fst-italic">Tell me more...</h3>
          <h4 className="fs-5 fw-bold fst-italic">
          Whether you're a seasoned gamer looking to refine your tactics or a newcomer eager to explore the vast world of gaming, this is the place for you. <br />
          </h4> 
            <br />
          <h5 className="fs-5 fw-bold fst-italic">
          Why Join Us?          
          </h5> 
          <ul>
            <li>
              Learn from the Best: Connect with skilled gamers from around the world. Gain insights into advanced strategies, watch tutorials, and participate in discussions that will elevate your gaming prowess.
            </li>
            <li>
              Diverse Gaming Genres: Our community embraces all genres. From fast-paced action games to strategic board games, there's always something new to learn and master.
            </li>
            <li>
              Inclusive and Supportive Environment: We believe in learning through collaboration and mutual support. Our members range from casual players to competitive professionals, all committed to a respectful and encouraging learning experience.
            </li>
            <li>
              Tailored to Your Pace: Whether you're looking for quick tips to improve your gameplay or in-depth guides for comprehensive learning, our resources cater to all levels and learning styles.
            </li>
            <li>
              Interactive Learning Opportunities: Engage in workshops, join gaming groups focused on learning, and participate in community-driven challenges that make learning fun and interactive.
            </li>
        </ul>
        <Link to="/signup" className="join-btn-link">
          <button className="btn join-btn btn-primary btn-lg">
            <strong>Join Now</strong>
          </button>
        </Link>
        </div>
        {/* <div className="top-box" style={topBoxStyles}>
          <p className="text-dark fw-bold fs-5 px-3 mb-0 fst-italic">
            Tell me more...
          </p>
        </div> */}
      </div>
      <TrendingGamesList />
    </body>
  );
}

export default LearnPage;
