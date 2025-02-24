import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

type SimpleMessageInputProps = {
    socket: any;
}

const SimpleMessageInput: React.FC<SimpleMessageInputProps> = ({socket}) => {
    const [messageText, setMessageText] = useState("");
    const [username, setUsername] = useState("");

    const sendMessage = () => {
        if (username.trim() === "") {
            alert("Please input username")
            return;
        }

        const timestamp = new Date().toLocaleString();

        socket.emit("message", { text: messageText, username: username, timestamp });
        setMessageText("");
    };

    const handleEnterKey = (e: any) => {
        if (e.key === "Enter") {
            e.preventDefault();
            sendMessage();
            setMessageText("");
        }
    };

    return (
        <Container>
            <Form>
                <Form.Label style={{ font: "aria", color: "lightgray" }}>
                    Set Username
                </Form.Label>
                <Form.Control
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter Username"
                    autoComplete="off"
                />
                <br />
                <Form.Label style={{ font: "aria", color: "lightgray" }}>
                    Type your message
                </Form.Label>
                <Form.Control
                    type="text"
                    id="text"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    onKeyDown={(e) => handleEnterKey(e)}
                    autoComplete="off"
                />
                <Button variant="primary" onClick={sendMessage} style={{ marginTop: "10px" }}>
                    Send message
                </Button>
            </Form>
        </Container>
    );
}

export default SimpleMessageInput;