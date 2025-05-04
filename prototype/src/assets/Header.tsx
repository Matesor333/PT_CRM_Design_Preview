import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    const currentPath = location.pathname;

    // Determine page title based on current path
    let pageTitle = "Dashboard";
    if (currentPath === "/clients") {
        pageTitle = "Clients";
    }

    return (
        <header className="header">
            <div className="brand-name">Augmented Fitness</div>
            <div className="page-title">{pageTitle}</div>
            <div className="header-right">
                <div className="notification-icon">
                    <FontAwesomeIcon icon={faBell} />
                    <span className="notification-badge">2</span>
                </div>
                <div className="user-initials">PT</div>
            </div>
        </header>
    );
}

export default Header;
