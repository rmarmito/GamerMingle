import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import PersonContainer from "./PersonContainer";

function ActivityPage() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentMessage, setCurrentMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const authToken = localStorage.getItem("token");

  const fetchChatHistory = useCallback(
    async (receiverId) => {
      if (!receiverId) return;

      try {
        const response = await axios.get(
          `http://localhost:8000/api/messages/?receiver=${receiverId}`,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        setChatHistory(response.data);
      } catch (error) {
        console.error("Error fetching chat history:", error);
      }
    },
    [authToken]
  );

  const handleMessageChange = (event) => {
    setCurrentMessage(event.target.value);
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const sendMessage = async () => {
    if (!selectedUser || !selectedUser.id) {
      console.error("No user selected or user ID is undefined");
      return;
    }
    if (!currentMessage.trim()) {
      console.error("Message is empty");
      return;
    }

    const body = {
      message: currentMessage,
      receiver: selectedUser.id,
      sender: currentUser.id,
    };

    try {
      const postUrl = `http://localhost:8000/api/messages/${selectedUser.id}/`;
      const response = await axios.post(postUrl, body, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.status === 201) {
        setChatHistory((prevChatHistory) => [
          ...prevChatHistory,
          response.data,
        ]);
        setCurrentMessage("");
      } else {
        console.error("Failed to send message:", response);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  useEffect(() => {
    let intervalId;

    // A helper function to be used for fetching the chat history
    const fetchHistory = () => {
      if (selectedUser && selectedUser.id) {
        fetchChatHistory(selectedUser.id).catch(console.error);
      }
    };

    fetchHistory();

    // Then, set up the interval for refreshing the chat history
    intervalId = setInterval(fetchHistory, 3000); // Refresh every 3 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, [selectedUser, fetchChatHistory]);

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
      if (!authToken) {
        console.error("No auth token available");
        // Handle lack of authToken appropriately
        return;
      }
      try {
        const response = await axios.get(
          "http://localhost:8000/api/current_user/",
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        setCurrentUser(response.data);
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };

    fetchUsers();
    getCurrentUser();
  }, [authToken]);

  useEffect(() => {
    // Set up an interval for fetching chat history for the selected user
    let intervalId;
    if (selectedUser && selectedUser.id) {
      fetchChatHistory(selectedUser.id);
      intervalId = setInterval(() => {
        fetchChatHistory(selectedUser.id);
      }, 3000); // Refresh every 3 seconds
    }

    // Clear the interval when the component unmounts or when selectedUser changes
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [selectedUser, fetchChatHistory]);

  const containersStyles = {
    paddingTop: "100px",
    paddingBottom: "100px",
    justifyContent: "center",
    paddingLeft: "0px",
    height: "100vh",
  };

  const personsContainerStyles = {
    paddingTop: "90px",
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
    height: "350px", // Set a max height for scrollable content
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
                onClick={() => handleUserClick(user)}
                isSelected={selectedUser && user.id === selectedUser.id}
              ></PersonContainer>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-5" style={containersStyles}>
        <div className="chat-box shadow-lg" style={chatBoxStyles}>
          <div className="chat-box-area" style={chatContainerStyles}>
            {selectedUser && (
              <div className="chat-header text-warning">
                Start chatting with {selectedUser.username}
              </div>
            )}
            <div className="chat-history">
              {chatHistory.map((message, index) => (
                <p key={index}>{message.content}</p>
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
              <button
                className="btn btn-primary"
                onClick={() => sendMessage(selectedUser.id)}
              >
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
