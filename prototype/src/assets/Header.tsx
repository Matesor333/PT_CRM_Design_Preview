import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

function Header() {
    // Determine page title based on current path

    return (
        <header className="header">
            <div className="brand-name">Augmented Fitness</div>

            <div className="header-right">
                <div className="notification-icon">
                    <FontAwesomeIcon icon={faBell} />
                    <span className="notification-badge">2</span>
                </div>
                <div className="user-initials">
                    PT
                </div>
            </div>
        </header>
    );
}

export default Header;
