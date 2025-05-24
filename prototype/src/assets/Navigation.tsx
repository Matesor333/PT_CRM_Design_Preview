import {faCalendarAlt, faCalendarCheck, faLayerGroup, faTasks, faThLarge, faUsers, faBars, faChevronLeft, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navigation() {
    const location = useLocation();
    const currentPath = location.pathname;
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleNavigation = () => {
        setIsCollapsed(!isCollapsed);
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
                    <li className="nav-item">
                        <Link to="/programs">
                            <FontAwesomeIcon icon={faLayerGroup} />
                            <span>Programs</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#">
                            <FontAwesomeIcon icon={faCalendarCheck} />
                            <span>Schedule</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#">
                            <FontAwesomeIcon icon={faTasks} />
                            <span>Tasks</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/callendar">
                            <FontAwesomeIcon icon={faCalendarAlt} />
                            <span>Calendar</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/messages">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>Messages</span>
                        </Link>
                    </li>
                </ul>

                <div className="profile">
                    <div className="user-avatar">PT</div>
                    <div className="user-info">
                        <div className="user-name">Trainer Account</div>
                        <Link to="#" className="view-profile">View Profile</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navigation;
