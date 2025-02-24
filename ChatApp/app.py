from web_socket_server import WebSocketServer, socketio, app
import datetime

app = WebSocketServer().create_app()

@socketio.on('connect')
def handle_connect():
    print('Client connected.')

@socketio.on('disconnect')
def handle_disconnect():
    print('Client disconnected')

@socketio.on('message')
def handle_message(message):
    username = message.get('username')
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    message_data = {
        "username": username,
        "text": message['text'],
        "timestamp": timestamp
    }


    print(f'Received message: {message_data}')
    socketio.emit('message', message_data)

if __name__ == '__main__':
    socketio.run(app)