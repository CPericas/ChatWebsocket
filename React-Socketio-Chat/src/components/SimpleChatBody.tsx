import React, { useEffect, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";

type SimpleChatBodyProps = {
    socket: any
};

const SimpleChatBody: React.FC<SimpleChatBodyProps> = ({ socket }) => {
    const [messages, setMessages] = useState([] as any);
    const [filter, setFilter] = useState("");
    const [filteredMessages, setFilteredMessages] = useState([] as any);

    useEffect(() => {
        socket.on("message", (message: any) => {
            setMessages([...messages, message]);
        });
    }, [socket, messages]);

    const handleFilterSubmit = () => {
        if (filter.trim() === "") {
            setFilteredMessages([]);
        } else {
            const filtered = messages.filter((message: any) =>
                message.username.toLowerCase().includes(filter.toLowerCase())
            );
            setFilteredMessages(filtered);
        }
    };

    return (
        <Container
            style={{
                marginTop: "40px",
                background: "lightblue",
                padding: "20px",
                borderRadius: "10px",
            }}
        >

            <Form>
                <Form.Label style={{ font: "aria", color: "black" }}>
                    Filter by Username
                </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter username to search"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
                <Button
                    variant="primary"
                    onClick={handleFilterSubmit}
                    style={{ marginTop: "10px"}}
                >
                    Filter
                </Button>
            </Form>

            {filter.trim() && filteredMessages.length > 0 ? (
                filteredMessages.map((message: any, index: any) => (
                    <Card key={index} className="mb-2">
                        <Card.Body>
                            <Card.Text>
                                <strong>{message.username}</strong>
                                <small>({message.timestamp})</small>
                                <br />
                                {message.text}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))
            ) : (
                <>
                    {messages.length > 0 ? (
                        messages.map((message: any, index: any) => (
                            <Card key={index} className="mb-2">
                                <Card.Body>
                                    <Card.Text>
                                        <strong>{message.username}</strong>
                                        <small>({message.timestamp})</small>
                                        <br />
                                        {message.text}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))
                    ) : (
                        <p>No messages yet.</p>
                    )}

                    {!filter.trim() && filteredMessages.length === 0 && (
                        <p>No messages found for this username.</p>
                    )}
                </>
            )}
        </Container>
    );
};

export default SimpleChatBody;