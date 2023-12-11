import React, { useState } from 'react';

const containersStyles = {
    paddingTop: "100px",
    paddingBottom: "100px",
    justifyContent: "center",
    paddingLeft: "0px",
    height: "100vh",
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

const MessageComponent = ({ authToken, selectedUser, setMessages }) => {
    const receiverUser = selectedUser;
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = async () => {
        console.log("token", authToken)
        const decodedToken = jwt_decode(authToken); // Assuming you have a library like jwt_decode
        console.log("Decoded Token:", decodedToken);
        try {
            console.log('Selected User in handleSendMessage:', selectedUser);
            console.log('Request Payload:', {
                content: newMessage,
                receiver: receiverUser,
            });
    
            // Ensure selectedUser exists and has an ID before sending a message
            if (receiverUser) {
                const response = await fetch('http://127.0.0.1:8000/api/messages/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${authToken}`,
                    },
                    body: JSON.stringify({
                        content: newMessage,
                        receiver: receiverUser,
                    }),
                });
    
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
    
                const data = await response.json();
    
                setMessages(prevMessages => [...prevMessages, data]);
                setNewMessage('');
            } else {
                console.error('No user selected or user ID is undefined');
            }
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };
    
    return (
        <div className="col-md-5" style={containersStyles}>
            <div className="chat-box shadow-lg" style={chatBoxStyles}>
                <div className="chat-box-area" style={chatContainerStyles}>
                    {selectedUser && (
                        <div className="chat-header text-warning">
                            Start chatting with {selectedUser.username}
                        </div>
                    )}
                </div>
                <div className="chat-message clearfix pt-3">
                    <div className="input-group mb-0">
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Type your message.."
                        />
                        <button className="btn btn-primary" onClick={handleSendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageComponent;
