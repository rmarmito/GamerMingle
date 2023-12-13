import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

const MessageComponent = ({ authToken, selectedUser, setMessages, currentUser }) => {
    const [newMessage, setNewMessage] = useState('');

    const fetchChatHistoryByUsername = async (username) => {
        try {
            if (username) {
                const response = await axios.get(`http://127.0.0.1:8000/api/messages/?receiver=${username}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${authToken}`,
                    },
                });

                if (!response.data.success) {
                    throw new Error(`API error: ${response.data.message || 'Unknown error'}`);
                }

                setMessages(response.data.data || []); // Adjust this based on your actual response structure
            } else {
                console.error('No username provided');
            }
        } catch (error) {
            console.error('Error fetching chat history:', error);
        }
    };

    const handleSendMessage = async () => {
        try {
            if (!selectedUser || !selectedUser.username || !currentUser || !currentUser.id) {
                console.error('No user selected or user ID is undefined');
                return;
            }
    
            const response = await axios.post('http://127.0.0.1:8000/api/messages/', {
                content: newMessage,
                receiver: selectedUser.username,
                sender: currentUser.id,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`,
                },
            });
    
            console.log('API Response:', response);
    
            if (!response.data.success) {
                throw new Error(`API error: ${response.data.message || 'Unknown error'}`);
            }
    
            // Assuming the message PK is accessible in response.data.message
            const messagePK = response.data.message.id;
            console.log('Sent Message PK:', messagePK);
    
            setMessages(prevMessages => [...prevMessages, response.data.message]);
            setNewMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    // Fetch chat history when selectedUser changes
    useEffect(() => {
        if (selectedUser && selectedUser.username) {
            fetchChatHistoryByUsername(selectedUser.username).catch(console.error);
        }
    }, [selectedUser, authToken]);

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
