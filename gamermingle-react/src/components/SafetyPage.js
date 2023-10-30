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
    minHeight: "100vh",
    position: "relative",
  };

  const topBoxStyles = {
    background: "white",
    border: "2px solid black",
    borderRadius: "10px",
    position: "absolute",
    padding: "10px",
    top: -30,
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1,
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
              <p className="text-dark fw-bold fs-5 px-3 mb-0">
                Safety @ GamerMingle
              </p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              tempor pretium dapibus. Suspendisse varius, ex ac auctor pharetra,
              mi purus ultrices leo, et tincidunt urna nunc at ex. Etiam lacinia
              nunc id tortor tempus interdum. Integer ornare et nunc quis
              pellentesque. In hac habitasse platea dictumst. Fusce auctor orci
              nec velit molestie, eu fermentum mauris varius. Ut eget magna
              augue. Donec ut auctor lectus. Suspendisse potenti. Cras convallis
              dui purus, vel volutpat dui maximus at. Curabitur mollis sem erat,
              eu laoreet quam volutpat non. Duis laoreet neque sit amet dolor
              viverra hendrerit. Praesent pharetra consequat fringilla. In in
              ligula dui. Cras maximus viverra mollis. Aliquam eget aliquam
              nulla.
            </p>
          </div>

          <div
            className="box shadow-lg"
            style={{ ...boxStyles, marginLeft: "30px" }}
          >
            <div className="top-box" style={{ ...topBoxStyles }}>
              <p className="text-dark fw-bold fs-5 px-3 mb-0">
                Code of Conduct
              </p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              tempor pretium dapibus. Suspendisse varius, ex ac auctor pharetra,
              mi purus ultrices leo, et tincidunt urna nunc at ex. Etiam lacinia
              nunc id tortor tempus interdum. Integer ornare et nunc quis
              pellentesque. In hac habitasse platea dictumst. Fusce auctor orci
              nec velit molestie, eu fermentum mauris varius. Ut eget magna
              augue. Donec ut auctor lectus. Suspendisse potenti. Cras convallis
              dui purus, vel volutpat dui maximus at. Curabitur mollis sem erat,
              eu laoreet quam volutpat non. Duis laoreet neque sit amet dolor
              viverra hendrerit. Praesent pharetra consequat fringilla. In in
              ligula dui. Cras maximus viverra mollis. Aliquam eget aliquam
              nulla.
            </p>
          </div>
        </div>
      </div>
    </body>
  );
}

export default SafetyPage;
