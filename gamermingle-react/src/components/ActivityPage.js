import React, { useState, useEffect } from "react";
import axios from "axios"; //axios for API requests
import PersonContainer from "./PersonContainer";

function ActivityPage() {
  const [users, setUsers] = useState([]); // State to store user data
  useEffect(() => {
    // Function to fetch user data
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/users/"); // Adjust URL as needed
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const containersStyles = {
    paddingTop: "100px",
    paddingBottom: "100px",
    justifyContent: "center",
    paddingLeft: "0px",
    height: "100vh",
  };

  const personsContainerStyles = {
    paddingTop: "100px",
    paddingBottom: "75px",
    justifyContent: "center",
    paddingLeft: "0px",
    height: "100vh",
  };
  const personsBoxStyles = {
    backgroundColor: "#bc7c9c",
    border: "10px solid #3b3b58",
    borderRadius: "0px",
    justifyContent: "center",
    //marginBottom: "100px",
    textAlign: "left",
    color: "white",
    width: "100%",
    height: "100%", // Set a max height for scrollable content
    overflowY: "hidden", // Enable vertical scroll if content overflows
  };

  const personsBoxInnerStyles = {
    overflowY: "auto",
    height: "100%",
    boxSizing: "content-box",
  };

  const chatBoxStyles = {
    backgroundImage: "radial-gradient(#cf9893, #bc7c9c)",
    border: "10px solid #3b3b58",
    borderRadius: "50px",
    justifyContent: "center",
    marginTop: "15px",
    marginBottom: "100px",
    paddingBlock: "20px",
    paddingInline: "20px",
    textAlign: "left",
    color: "white",
    width: "100%",
    height: "100%",
  };

  const chatContainerStyles = {
    border: "2px solid #3b3b58",
    backgroundColor: "#bc7c9c",
    borderRadius: "10px",
    padding: "10px",
    height: "90%", // Set a max height for scrollable content
    overflowY: "auto", // Enable vertical scroll if content overflows
  };
  const profileMediaStyles = {
    border: "2px solid #3b3b58",
    borderRadius: "30px",
    padding: "10px",
    height: "300px", // Set a max height for scrollable content
  };

  return (
    <div className="row p-0 m-0" style={{ width: "100%" }}>
      <div className="col-md-3 d-flex" style={personsContainerStyles}>
        {/* list of people to chat with */}
        <div className="persons-box shadow-lg" style={personsBoxStyles}>
          <div style={personsBoxInnerStyles}>
            {users.map((user) => (
              <PersonContainer
                key={user.id}
                username={user.username}
                imageUrl={user.profile_picture}
              ></PersonContainer>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-5" style={containersStyles}>
        <div className="chat-box shadow-lg" style={chatBoxStyles}>
          <div className="chat-box-area" style={chatContainerStyles}>
            <div class="chat-history">
              <p></p>
            </div>
          </div>
          <div class="chat-message clearfix pt-3">
            <div class="input-group mb-0">
              <div class="input-group-prepend"></div>
              <input
                type="text"
                class="form-control"
                placeholder="Send a message..."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4" style={containersStyles}>
        <div className="profile-box shadow-lg" style={chatBoxStyles}>
          <div className="profile-box-media" style={profileMediaStyles}>
            <p className="text-center"> -- PROFILE MEDIA GOES HERE -- </p>
          </div>
          <p className="text-center fw-bold fs-3">PERSON NAME/ALIAS</p>
          <div className="row">
            <div className="col-md-3 text-dark fw-bold">
              <p>
                PROFILE DETAILS GO HERE --
                <br />
                discord, steam, etc
              </p>
            </div>
            <div className="col-lg-9">
              <p>
                PROFILE DESCRIPTION GO HERE --
                <br />
                about yourself, etc
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityPage;
