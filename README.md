# Simple WebSocket Chat Application

Simple WebSocket Chat Application is a real-time chat app that enables users to send and receive messages instantly using WebSockets. The backend is built with Python (Flask-SocketIO), and the frontend uses React, TypeScript, and Bootstrap.

## Features

- **Real-time messaging** using WebSocket protocol
- **Username filtering** to search chat history easily
- **Timestamped messages** for real-time context
- **Responsive UI**, built with React-Bootstrap, adjusts seamlessly across various screen sizes
- **Type safety** using TypeScript
- **Backend** powered by Flask-SocketIO

## Tech Stack

**Frontend:**
- React.js (TypeScript)
- Bootstrap
- React-Bootstrap
- Vite

**Backend:**
- Python (Flask-SocketIO)
- Flask WebSocketServer (Custom Wrapper)

## How It Works

### Server Side (server.py)
- A Flask app is initialized using `WebSocketServer`.
- Handles three WebSocket events:
  - `connect`: Logs when a user connects.
  - `disconnect`: Logs when a user disconnects.
  - `message`: Receives a message (with username and text), attaches a timestamp, and broadcasts it to all connected clients.

### Frontend Components

- **SimpleMessageInput.tsx**: A component where users can input their username and type a message. The message is sent via WebSocket when the 'Send' button is clicked or the 'Enter' key is pressed.
- **SimpleChatBody.tsx**: Displays all incoming messages. It includes a search bar to filter messages by username, allowing users to review past messages more easily.
