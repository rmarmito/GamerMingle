class WebSocketService {
  static instance = null;
  callbacks = {};

  static getInstance() {
    if (!WebSocketService.instance) {
      WebSocketService.instance = new WebSocketService();
    }
    return WebSocketService.instance;
  }

  constructor() {
    this.socketRef = null;
  }

  connect() {
    const path = "ws://localhost:8000/ws/chat/";
    this.socketRef = new WebSocket(path);

    this.socketRef.onmessage = (e) => {
      this.socketNewMessage(e.data);
    };

    this.socketRef.onopen = () => {
      console.log("WebSocket open");
    };

    this.socketRef.onerror = (e) => {
      console.log(e.message);
    };

    this.socketRef.onclose = () => {
      console.log("WebSocket closed let's reopen");
      this.connect();
    };
  }

  disconnect() {
    this.socketRef.close();
  }

  socketNewMessage(data) {
    const parsedData = JSON.parse(data);
    const command = parsedData.command;
    if (Object.keys(this.callbacks).length === 0) {
      return;
    }
    if (command === "messages") {
      this.callbacks[command](parsedData.messages);
    }
  }

  sendMessage(data) {
    try {
      this.socketRef.send(JSON.stringify({ message: data }));
    } catch (err) {
      console.log(err.message);
    }
  }

  addCallbacks(messagesCallback) {
    this.callbacks["messages"] = messagesCallback;
  }
}

const WebSocketInstance = WebSocketService.getInstance();

export default WebSocketInstance;
