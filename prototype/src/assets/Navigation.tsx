import {faCalendarAlt, faCalendarCheck, faLayerGroup, faTasks, faThLarge, faUsers, faBars, faChevronLeft, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import ProfilePopUp from './Pages/View-Profie/Profile-Pop-Up';

function Navigation() {
    const location = useLocation();
    const currentPath = location.pathname;
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);

    const toggleNavigation = () => {
        setIsCollapsed(!isCollapsed);
    };

    // Toggle profile popup
    const toggleProfilePopup = (e) => {
        e.preventDefault();
        setIsProfilePopupOpen(!isProfilePopupOpen);
    };

    // Close profile popup
    const closeProfilePopup = () => {
        setIsProfilePopupOpen(false);
    };

    return (
        <div className="navigation-container">

            <button 
                className="nav-toggle-btn" 
                onClick={toggleNavigation}
                aria-label={isCollapsed ? "Expand navigation" : "Collapse navigation"}
            >
                <FontAwesomeIcon icon={isCollapsed ? faBars : faChevronLeft} />
            </button>
            <nav className={`sidenav ${isCollapsed ? 'collapsed' : ''}`}>
                <div className="nav-brand">{isCollapsed ? 'AF' : 'Augmented Fitness'}</div>
                <ul className="nav-links">
                    <li className={`nav-item ${currentPath === "/dashboard" ? "active" : ""}`}>
                        <Link to="/dashboard">
                            <FontAwesomeIcon icon={faThLarge} />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${currentPath === "/clients" ? "active" : ""}`}>
                        <Link to="/clients">
                            <FontAwesomeIcon icon={faUsers} />
                            <span>Clients</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${currentPath === "/programs" ? "active" : ""}`}>
                        <Link to="/programs">
                            <FontAwesomeIcon icon={faLayerGroup} />
                            <span>Programs</span>
                        </Link>
                    </li>


                    <li className={`nav-item ${currentPath === "/callendar" ? "active" : ""}`}>
                        <Link to="/callendar">
                            <FontAwesomeIcon icon={faCalendarAlt} />
                            <span>Calendar</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${currentPath === "/messages" ? "active" : ""}`}>
                        <Link to="/messages">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>Messages</span>
                        </Link>
                    </li>
                    <li className={`nav-item ${currentPath === "/notes" ? "active" : ""}`}>
                        <Link to="/notes">
                            <FontAwesomeIcon icon={faTasks} />
                            <span>Notes</span>
                        </Link>
                    </li>
                </ul>

                <div className="profile">
                    <div className="user-avatar">PT</div>
                    <div className="user-info">
                        <div className="user-name">Trainer Account</div>
                        <Link to="#" className="view-profile" onClick={toggleProfilePopup}>View Profile</Link>
                    </div>
                </div>
            </nav>

            {/* Profile Popup */}
            <ProfilePopUp 
                isOpen={isProfilePopupOpen} 
                onClose={closeProfilePopup} 
            />
        </div>
    );
}
export default Navigation;
