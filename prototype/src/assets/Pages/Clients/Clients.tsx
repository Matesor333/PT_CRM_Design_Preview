import ClientCard from "./ClientCard.tsx";
import Header from "../../Header.tsx";
import Navigation from "../../Navigation.tsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Clients() {
    return (
        <div className="app-container">
            <Header />
            <div className="main-content">
                <Navigation />
                <div className="dashboard-content">
                    <div className="clients-header">
                        <div className="clients-title-section">
                            <h2>Clients</h2>
                            <p>Manage your client list</p>
                        </div>
                        <div className="clients-actions">
                            <div className="search-container">
                                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                                <input 
                                    type="text" 
                                    className="search-input" 
                                    placeholder="Search clients..." 
                                />
                            </div>
                            <button className="add-client-btn">
                                <FontAwesomeIcon icon={faPlus} />
                                <span>Add Client</span>
                            </button>
                        </div>
                    </div>
                    <div className="clients-grid">
                        <Link to="/prototype/src/assets/Pages/Clients/SpecificClient/SpecificClientPage.tsx">
                            <ClientCard />
                        </Link>
                        <ClientCard />
                        <ClientCard />
                        <ClientCard />
                        <ClientCard />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Clients;
