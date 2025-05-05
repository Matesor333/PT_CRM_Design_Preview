import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowUpRightFromSquare,
    faEdit, 
    faTrash,
    faUser
} from '@fortawesome/free-solid-svg-icons';

function ClientCard() {
    return(
        <div className="client-card">
            <div className="client-avatar">
                <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="client-info">
                <div className="client-header">
                    <h3 className="client-name">John Smith</h3>
                    <div className="client-actions">
                        <button className="action-btn view-btn" title="View">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </button>
                        <button className="action-btn edit-btn" title="Edit">
                            <FontAwesomeIcon icon={faEdit} />
                        </button>
                        <button className="action-btn delete-btn" title="Delete">
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </div>
                <div className="client-details">
                    <div className="client-detail">
                        <span className="detail-label">Email:</span>
                        <span className="detail-value">john.smith@example.com</span>
                    </div>
                    <div className="client-detail">
                        <span className="detail-label">Phone:</span>
                        <span className="detail-value">(555) 123-4567</span>
                    </div>
                    <div className="client-detail">
                        <span className="detail-label">Program:</span>
                        <span className="detail-value">1 to 1 Coaching</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ClientCard
