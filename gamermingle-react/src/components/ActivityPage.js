import React, { useState, useEffect } from "react";
import axios from "axios"; //axios for API requests
import PersonContainer from "./PersonContainer";

function ActivityPage() {
  const [users, setUsers] = useState([]); // State to store user data
  const [selectedUser, setSelectedUser] = useState(null); // state for tracking selected user

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/users/");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

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
                onClick={() => handleUserClick(user)} // Add an onClick event here
                isSelected={selectedUser && user.id === selectedUser.id}
              ></PersonContainer>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-5" style={containersStyles}>
        <div className="chat-box shadow-lg" style={chatBoxStyles}>
          <div className="chat-box-area" style={chatContainerStyles}>
            <div className="chat-history">
              {selectedUser && <p>Chat with {selectedUser.username}</p>}
              {/* You would populate this area with the selected user's chat history */}
            </div>
          </div>
          <div className="chat-message clearfix pt-3">
            <div className="input-group mb-0">
              <input
                type="text"
                className="form-control"
                placeholder="Send a message..."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4" style={containersStyles}>
        <div className="profile-box shadow-lg" style={chatBoxStyles}>
          <div className="profile-box-media" style={profileMediaStyles}>
            {selectedUser && selectedUser.profile_picture ? (
              <img
                src={selectedUser.profile_picture}
                alt={selectedUser.username}
                style={{ width: "100%", height: "100%", objectFit: "cover" }} // You may want to adjust styles accordingly
              />
            ) : (
              <p className="text-center"> -- No profile media -- </p>
            )}
          </div>
          <p className="text-center fw-bold fs-3">
            {selectedUser ? selectedUser.username : "Select a person"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ActivityPage;
