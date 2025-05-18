//import ClientCard from "./ClientCard.tsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUpRightFromSquare, faEdit, faPlus, faSearch, faTrash, faUser} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
//import { Link } from "react-router-dom";

function Clients() {
    const clients = [
        {
            id: 1,
            name: "John Smith",
            email: "john.smith@example.com",
            phone: "(555) 123-4567",
            programId: 0
        },

        {
            id: 2,
            name: "Alberta Neviem",
            email: "Alberta@example.com",
            phone: 858555845,
            programId: 0
        },
        {
            id: 3,
            name: "Matus Ill",
            email: "Matus@example.com",
            phone: 858555845,
            programId: 1
        },

    ]
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
                    <button className="add-client-btn">
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
                                <h3 className="client-name">{allClient.name}</h3>
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
        </>
    );
}

export default Clients;
