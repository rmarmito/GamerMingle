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

  const topBoxStyles = {
    background: "white",
    border: "2px solid black",
    borderRadius: "10px",
    position: "absolute",
    padding: "10px",
    top: 125,
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1,
  };

  return (
    <body>
      <div className="learn-container" style={learnContainerStyles}>
        <div
          className="box shadow-lg justify-content-center"
          style={{ ...boxStyles }}
        >
          <h3 className="fs-1 fw-bold fst-italic">Tell me more...</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor
            pretium dapibus. Suspendisse varius, ex ac auctor pharetra, mi purus
            ultrices leo, et tincidunt urna nunc at ex. Etiam lacinia nunc id
            tortor tempus interdum. Integer ornare et nunc quis pellentesque. In
            hac habitasse platea dictumst. <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor
            pretium dapibus. Suspendisse varius, ex ac auctor pharetra, mi purus
            ultrices leo, et tincidunt urna nunc at ex. Etiam lacinia nunc id
            tortor tempus interdum. Integer ornare et nunc quis pellentesque. In
            hac habitasse platea dictumst.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor
            pretium dapibus. Suspendisse varius, ex ac auctor pharetra, mi purus
            ultrices leo, et tincidunt urna nunc at ex. Etiam lacinia nunc id
            tortor tempus interdum. Integer ornare et nunc quis pellentesque. In
            hac habitasse platea dictumst.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor
            pretium dapibus. Suspendisse varius, ex ac auctor pharetra, mi purus
            ultrices leo, et tincidunt urna nunc at ex. Etiam lacinia nunc id
            tortor tempus interdum. Integer ornare et nunc quis pellentesque. In
            hac habitasse platea dictumst.
          </p>
        </div>
        {/* <div className="top-box" style={topBoxStyles}>
          <p className="text-dark fw-bold fs-5 px-3 mb-0 fst-italic">
            Tell me more...
          </p>
        </div> */}
      </div>
    </body>
  );
}

export default LearnPage;
