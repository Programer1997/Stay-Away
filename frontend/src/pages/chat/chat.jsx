import './chat.css';
import ProfileNav from '../../components/profileNav/ProfileNav';
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const ChatPage = () => {
    const [message, setMessage] = useState('');
    const [currentUserId, setCurrentUserId] = useState('')
    const [messages, setMessages] = useState([]);
    const [socket, setSocket] = useState(null);



    useEffect(() => {
        const newSocket = io('http://localhost:8000');
        setSocket(newSocket);

        newSocket.on('connect', () => {
            newSocket.emit('request_my_id');
        });

        newSocket.on('my_id', (id) => {
            setCurrentUserId(id);
        });

        newSocket.on('receive_message', (data) => {
            setMessages(prev => [...prev, data]);
        });

        return () => newSocket.disconnect();
    }, []);

    const sendMessage = () => {
        if (socket) {
            socket.emit('send_message', { message });
            setMessage('');
        }
    };

    const formatTimestamp = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <>
            <ProfileNav />
            <div className="chatPage">
                <div className="chatContainer">
                    {/* <div className="chatSidebar"> */}
                    {/* Static contacts - can be made dynamic if needed */}
                    {/* <div className="chatContact">Momma</div>
                        <div className="chatContact">Daddy</div>
                    </div> */}
                    <div className="chatMain">
                        <div className="chatHeader">
                            Chatroom
                        </div>
                        <div className="chatMessages">
                            {messages.map((msg, index) => (
                                <div key={index} className={`message-container ${msg.senderId === currentUserId ? 'my-message' : 'other-message'}`}>
                                    <div className="message">
                                        {msg.message}
                                        <div className="timestamp">{formatTimestamp(msg.timestamp)}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="chatInputArea">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Type a message..."
                            />
                            <button onClick={sendMessage}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatPage;