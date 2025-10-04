//import ClientCard from "./ClientCard.tsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUpRightFromSquare, faEdit, faPlus, faSearch, faTrash, faUser} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
//import { Link } from "react-router-dom";
import "./Clients.css";
import AddClient from '../pop-ups/Add-Client';
import React, { useState } from 'react';

function Clients() {
    const [isAddClientOpen, setIsAddClientOpen] = useState(false);
    const [clients, setClients] = useState([
        {
            id: 1,
            firstName: "John",
            lastName: "Smith",
            email: "john.smith@example.com",
            phone: "(555) 123-4567",
            programId: 0
        },
        {
            id: 2,
            firstName: "Alberta",
            lastName: "Neviem",
            email: "Alberta@example.com",
            phone: 858555845,
            programId: 0
        },
        {
            id: 3,
            firstName: "Matus",
            lastName: "Ill",
            email: "Matus@example.com",
            phone: 858555845,
            programId: 1
        },
        {
            id: 4,
            firstName: "Sarah",
            lastName: "Johnson",
            email: "sarah.johnson@example.com",
            phone: "(555) 234-5678",
            programId: 1
        },
        {
            id: 5,
            firstName: "Michael",
            lastName: "Brown",
            email: "michael.brown@example.com",
            phone: "(555) 345-6789",
            programId: 0
        },
        {
            id: 6,
            firstName: "Emily",
            lastName: "Davis",
            email: "emily.davis@example.com",
            phone: "(555) 456-7890",
            programId: 1
        },
        {
            id: 7,
            firstName: "David",
            lastName: "Wilson",
            email: "david.wilson@example.com",
            phone: "(555) 567-8901",
            programId: 0
        },
        {
            id: 8,
            firstName: "Jessica",
            lastName: "Martinez",
            email: "jessica.martinez@example.com",
            phone: "(555) 678-9012",
            programId: 1
        },
        {
            id: 9,
            firstName: "Robert",
            lastName: "Taylor",
            email: "robert.taylor@example.com",
            phone: "(555) 789-0123",
            programId: 0
        },
        {
            id: 10,
            firstName: "Jennifer",
            lastName: "Anderson",
            email: "jennifer.anderson@example.com",
            phone: "(555) 890-1234",
            programId: 1
        },
    ]);

    const handleAddClient = (newClient) => {
        // Create a new client object with an ID
        const client = {
            id: clients.length > 0 ? Math.max(...clients.map(c => c.id)) + 1 : 1,
            firstName: newClient.firstName,
            lastName: newClient.lastName,
            email: newClient.email,
            phone: newClient.phone,
            programId: newClient.programId
        };

        // Add the new client to the clients array
        setClients([...clients, client]);
    };
    const programList = [
        {
            id: 0,
            name: "1o1 Coaching"
        },


        {
            id: 1,
            name: "Group Fat-Loss"
        }

    ]
    return (
        <>
            <div className="clients-header">
                <div className="clients-title-section">
                    <h2>Clients</h2>
                    <p>Manage your client list</p>
                </div>
                <div className="clients-actions">
                    <div className="search-container">
                        <FontAwesomeIcon icon={faSearch} className="search-icon"/>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search clients..."
                        />
                    </div>
                    <button className="add-client-btn" onClick={() => setIsAddClientOpen(true)}>
                        <FontAwesomeIcon icon={faPlus}/>
                        <span>Add Client</span>
                    </button>
                </div>
            </div>
            <div className="clients-grid">


                {clients.map(allClient => (
                    <Link to="/prototype/src/assets/Pages/Clients/SpecificClient/SpecificClientPage.tsx">
                    <div className="client-card" key={allClient.id}>
                        <div className="client-avatar">
                            <FontAwesomeIcon icon={faUser}/>
                        </div>
                        <div className="client-info">
                            <div className="client-header">
                                <h3 className="client-name">{allClient.firstName} {allClient.lastName}</h3>
                                <div className="client-actions">
                                    <button className="action-btn view-btn" title="View">
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                                    </button>
                                    <button className="action-btn edit-btn" title="Edit">
                                        <FontAwesomeIcon icon={faEdit}/>
                                    </button>
                                    <button className="action-btn delete-btn" title="Delete">
                                        <FontAwesomeIcon icon={faTrash}/>
                                    </button>
                                </div>
                            </div>
                            <div className="client-details">
                                <div className="client-detail">
                                    <span className="detail-label">Email:</span>
                                    <span className="detail-value">{allClient.email}</span>
                                </div>
                                <div className="client-detail">
                                    <span className="detail-label">Phone:</span>
                                    <span className="detail-value">{allClient.phone}</span>
                                </div>
                                <div className="client-detail">
                                    <span className="detail-label">Program:</span>
                                    <span className="detail-value">{programList.find(program => program.id === allClient.programId)?.name || "No program assigned"}</span>
                                </div>
                            </div>
                        </div>
                    </div></Link>))}

            </div>

            <AddClient 
                isOpen={isAddClientOpen}
                onClose={() => setIsAddClientOpen(false)}
                onAddClient={handleAddClient}
                programs={programList}
            />
        </>
    );
}

export default Clients;
