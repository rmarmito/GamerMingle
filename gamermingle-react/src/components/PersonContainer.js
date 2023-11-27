import React, { useState } from "react";

function PersonContainer({ imageUrl, username, children }) {
  const [hovered, setHovered] = useState(false);
  const personListStyles = {
    border: "2px solid #3b3b58",
    borderRadius: "0px",
    paddingBottom: "70px",
    margin: "0px",
    height: "20%",
    width: "100%",
    cursor: "pointer",
  };
  const personListHoverStyle = {
    ...personListStyles,
    backgroundColor: hovered ? "#7a5980" : "initial", // Change color on hover
    transform: hovered ? "scaleY(1.1)" : "initial", // Change scale on hover
  };

  const imageStyles = {
    width: "100%",
    height: "auto",
    borderRadius: "50%",
    margin: "20px",
  };

  return (
    <div
      className="person-container"
      style={personListHoverStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="row g-0">
        <div className="col-3">
          <img
            src={imageUrl || "https://via.placeholder.com/50"}
            alt="Profile"
            className="img-fluid"
            style={imageStyles}
          />
        </div>
        <div
          className="col d-flex align-items-center"
          style={{ paddingLeft: "50px" }}
        >
          <span>{username || "Placeholder Name"}</span>
          {children}
        </div>
      </div>
    </div>
  );
}

export default PersonContainer;
