import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonContainer from "./PersonContainer";

function ActivityPage() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentMessage, setCurrentMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/users/");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    const getCurrentUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/current_user/"
        );
        setCurrentUser(response.data);
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };
    fetchUsers();
    getCurrentUser();
  }, []);

  const handleMessageChange = (event) => {
    setCurrentMessage(event.target.value);
  };

  const handleUserClick = async (user) => {
    try {
      setSelectedUser(user);
    } catch (error) {
      console.error("Error fetching user profile:", error);
      setSelectedUser(null);
    }
  };

  const sendMessage = async () => {
    if (currentMessage.trim() !== "" && selectedUser && currentUser) {
      try {
        await axios.post(`http://localhost:8000/api/messages/`, {
          sender: currentUser.id,
          receiver: selectedUser.id,
          message: currentMessage,
        });
        setCurrentMessage("");
        fetchChatHistory(selectedUser.id);
      } catch (error) {
        console.error("Error sending message:", error);
      }
    } else {
      console.error("Message is empty or user not selected");
    }
  };

  const fetchChatHistory = async (userId) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/messages/${userId}`
      );
      setChatHistory(response.data);
    } catch (error) {
      console.error("Error fetching chat history:", error);
    }
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
              {chatHistory.map((message, index) => (
                <p key={index}>{message.content} </p>
              ))}
            </div>
          </div>
          <div className="chat-message clearfix pt-3">
            <div className="input-group mb-0">
              <input
                type="text"
                className="form-control"
                placeholder="Send a message..."
                value={currentMessage}
                onChange={handleMessageChange}
              />
              <button className="btn btn-primary" onClick={sendMessage}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4" style={containersStyles}>
        <div className="profile-box shadow-lg" style={chatBoxStyles}>
          {/* Profile Picture */}
          <div className="profile-box-media" style={profileMediaStyles}>
            {selectedUser && selectedUser.profile_picture ? (
              <img
                src={selectedUser.profile_picture} // Use the same property as in PersonContainer
                alt={`Profile of ${selectedUser.username}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <p className="text-center"> -- No profile media -- </p>
            )}
          </div>

          {/* Username */}
          <p
            className="text-center fw-bold display-5"
            style={{ color: "#3b3b58" }}
          >
            {selectedUser ? selectedUser.username : "Select a person"}
          </p>
          <div className="row">
            {/* Left Column for Discord, Steam, and Riot ID */}
            <div className="col-md-4">
              <p>
                <p
                  className="fw-bold fs-3 text-left"
                  style={{ color: "#FFF4E9" }}
                >
                  Socials{" "}
                </p>
                <strong>Discord: </strong>
                <br /> {selectedUser ? selectedUser.discord : "N/A"}
              </p>
              <p>
                <strong>Steam: </strong>
                <br />
                {selectedUser ? selectedUser.steam : "N/A"}
              </p>
              <p>
                <strong>Riot ID: </strong>
                <br />
                {selectedUser ? selectedUser.riotid : "N/A"}
              </p>
            </div>
            {/* Right Column for About  */}
            <div className="col-lg-8">
              <p>
                <p
                  className="fw-bold fs-3 text-left"
                  style={{ color: "#FFF4E9" }}
                >
                  About{" "}
                </p>
                {selectedUser ? selectedUser.about : "No details provided."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityPage;
