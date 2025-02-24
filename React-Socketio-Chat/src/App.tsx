import "./App.css";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import SimpleChatBody from "./components/SimpleChatBody";
import SimpleMessageInput from "./components/SimpleMessageInput";
import { Container } from "react-bootstrap";

const socket = io("http://127.0.0.1:5000")

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    console.log("Connecting to server...");
    socket.on("connect", () => {
      console.log("Connected to server");
      setIsConnected(true)
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
      setIsConnected(false)
    });
  }, []);

  return (
    <div>
      <h1>Welcome to React with Sockets</h1>
        <p>Connection Status:
           {isConnected ? "connected" : "Not connected"}
        </p>
        <Container>
          <h2>Chat Room</h2>
          <Container>
            <SimpleChatBody socket={socket} />
          </Container>
          <SimpleMessageInput socket={socket} />
        </Container>
    </div>
  );
}

export default App;