Simple WebSocket Chat Application

This is a real-time chat application built using Python (with Flask-SocketIO) on the backend and React with TypeScript and Bootstrap on the frontend.
Users can send and receive messages instantly, filter messages by username, and see timestamps for each message.

Features
🔹 Real-time messaging using WebSocket protocol

🔹 Username filtering to search chat history easily

🔹 Timestamped messages

🔹 Responsive UI with React-Bootstrap

🔹 Built with TypeScript for type safety

🔹 Backend powered by Flask-SocketIO

Tech Stack

Frontend:                
React.js (TypeScript)	    
Bootstrap	                
React-Bootstrap	          
Vite 

Backend:
Python (Flask-SocketIO)
Flask
WebSocketServer (Custom Wrapper)

How It Works
1. Server Side (server.py)
A Flask app is initialized using WebSocketServer.

Handles three WebSocket events:

connect: Logs when a user connects.

disconnect: Logs when a user disconnects.

message: Receives a message (with username and text), attaches a timestamp, and broadcasts it to all connected clients.

2. Frontend Components
SimpleMessageInput.tsx:
Users input their username and type a message. Messages are sent via WebSocket when clicking the button or pressing Enter.

SimpleChatBody.tsx:
Displays all incoming messages. Users can filter messages by username using a search bar.
