import React from 'react';
import './chat.css';
import ProfileNav from '../../components/profileNav/ProfileNav';

const ChatPage = () => {
    return (
        <>
            <ProfileNav />
            <div className="chatPage">
                <div className="chatContainer">
                    <div className="chatSidebar">
                        <div className="chatContact">Momma</div>
                        <div className="chatContact">Daddy</div>
                    </div>
                    <div className="chatMain">
                        <div className="chatHeader">
                            Francisco Murcia
                        </div>
                        <div className="chatMessages">
                            <div className="message">Hello there!</div>
                            <div className="message-container">
                                <div className="my-message">Hey! I'm good, wby?</div>
                            </div>
                        </div>
                        <div className="chatInputArea">
                            <input type="text" placeholder="Type a message..." />
                            <button>Send</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default ChatPage;