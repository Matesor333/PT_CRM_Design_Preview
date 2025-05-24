import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faArrowUpRightFromSquare, 
    faEdit, 
    faPlus, 
    faSearch, 
    faTrash, 
    faUsers, 
    faComments, 
    faPaperPlane, 
    faEllipsisV,
    faSmile,
    faPaperclip,
    faUser
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import "./Messages.css";

function Messages() {
    // Sample data for message groups
    const messageGroups = [
        {
            id: 1,
            name: "Team Alpha",
            members: ["John Smith", "Alberta Neviem", "Matus Ill"],
            lastMessage: "Let's discuss the new training plan",
            timestamp: "10:30 AM",
            unread: true
        },
        {
            id: 2,
            name: "Fitness Enthusiasts",
            members: ["Alberta Neviem", "Matus Ill", "Sarah Johnson"],
            lastMessage: "Great progress everyone!",
            timestamp: "Yesterday",
            unread: false
        },
        {
            id: 3,
            name: "Nutrition Group",
            members: ["John Smith", "Sarah Johnson", "Mike Brown"],
            lastMessage: "Don't forget to log your meals",
            timestamp: "2 days ago",
            unread: false
        },
        {
            id: 4,
            name: "John Smith",
            members: ["John Smith"],
            lastMessage: "How's your training going?",
            timestamp: "3 days ago",
            unread: false
        },
        {
            id: 5,
            name: "Alberta Neviem",
            members: ["Alberta Neviem"],
            lastMessage: "I'll send you the nutrition plan tomorrow",
            timestamp: "1 week ago",
            unread: false
        }
    ];

    // Sample messages for the selected chat
    const sampleMessages = [
        {
            id: 1,
            sender: "John Smith",
            text: "Hey, how's your training going?",
            timestamp: "10:15 AM",
            isMe: false
        },
        {
            id: 2,
            sender: "Me",
            text: "It's going well! I've been following the program you sent.",
            timestamp: "10:18 AM",
            isMe: true
        },
        {
            id: 3,
            sender: "John Smith",
            text: "Great to hear! Have you noticed any improvements?",
            timestamp: "10:20 AM",
            isMe: false
        },
        {
            id: 4,
            sender: "Me",
            text: "Yes, definitely! My endurance has improved and I'm feeling stronger overall.",
            timestamp: "10:22 AM",
            isMe: true
        },
        {
            id: 5,
            sender: "John Smith",
            text: "That's excellent progress! Let's discuss the new training plan for next month.",
            timestamp: "10:30 AM",
            isMe: false
        }
    ];

    const [selectedGroup, setSelectedGroup] = useState(messageGroups[0]);
    const [newMessage, setNewMessage] = useState("");

    const handleGroupSelect = (group) => {
        setSelectedGroup(group);
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (newMessage.trim() === "") return;

        // In a real app, you would send the message to the server here
        console.log("Sending message:", newMessage);

        // Clear the input field
        setNewMessage("");
    };

    return (
        <div className="messages-container">
            {/* Left sidebar with contacts/groups */}
            <div className="messages-sidebar">
                <div className="sidebar-header">
                    <h2>Messages</h2>
                    <button className="create-group-btn">
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </div>
                <div className="sidebar-search">
                    <div className="search-container">
                        <FontAwesomeIcon icon={faSearch} className="search-icon"/>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search messages..."
                        />
                    </div>
                </div>
                <div className="chat-list">
                    {messageGroups.map(group => (
                        <div 
                            className={`chat-item ${selectedGroup.id === group.id ? 'active' : ''} ${group.unread ? 'unread' : ''}`} 
                            key={group.id}
                            onClick={() => handleGroupSelect(group)}
                        >
                            <div className="chat-avatar">
                                <FontAwesomeIcon icon={group.members.length > 1 ? faUsers : faUser}/>
                            </div>
                            <div className="chat-info">
                                <div className="chat-header">
                                    <h3 className="chat-name">{group.name}</h3>
                                    <span className="chat-time">{group.timestamp}</span>
                                </div>
                                <div className="chat-preview">
                                    <p>{group.lastMessage}</p>
                                    {group.unread && <span className="unread-badge"></span>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main chat area */}
            <div className="chat-area">
                {selectedGroup ? (
                    <>
                        <div className="chat-header">
                            <div className="chat-header-info">
                                <div className="chat-avatar">
                                    <FontAwesomeIcon icon={selectedGroup.members.length > 1 ? faUsers : faUser}/>
                                </div>
                                <div>
                                    <h3>{selectedGroup.name}</h3>
                                    <p>{selectedGroup.members.length > 1 
                                        ? `${selectedGroup.members.length} members` 
                                        : "Online"}
                                    </p>
                                </div>
                            </div>
                            <div className="chat-header-actions">
                                <button className="action-btn">
                                    <FontAwesomeIcon icon={faSearch}/>
                                </button>
                                <button className="action-btn">
                                    <FontAwesomeIcon icon={faEllipsisV}/>
                                </button>
                            </div>
                        </div>
                        <div className="chat-messages">
                            {sampleMessages.map(message => (
                                <div 
                                    className={`message ${message.isMe ? 'message-out' : 'message-in'}`} 
                                    key={message.id}
                                >
                                    <div className="message-content">
                                        {!message.isMe && <span className="message-sender">{message.sender}</span>}
                                        <p>{message.text}</p>
                                        <span className="message-time">{message.timestamp}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="chat-input-area">
                            <button className="action-btn">
                                <FontAwesomeIcon icon={faSmile}/>
                            </button>
                            <button className="action-btn">
                                <FontAwesomeIcon icon={faPaperclip}/>
                            </button>
                            <form onSubmit={handleSendMessage} className="message-form">
                                <input 
                                    type="text" 
                                    placeholder="Type a message" 
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                />
                                <button type="submit" className="send-btn">
                                    <FontAwesomeIcon icon={faPaperPlane}/>
                                </button>
                            </form>
                        </div>
                    </>
                ) : (
                    <div className="no-chat-selected">
                        <div className="no-chat-content">
                            <FontAwesomeIcon icon={faComments} className="no-chat-icon"/>
                            <h3>Select a chat to start messaging</h3>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Messages;
