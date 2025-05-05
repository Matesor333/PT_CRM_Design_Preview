import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faUser
} from '@fortawesome/free-solid-svg-icons';
function ClientInformation(){
    return(
        <div className="ClientInformation">

            <div className="info">
                <FontAwesomeIcon icon={faUser} />
                <span>Client Information</span>
            </div>
            <div className="EmailInfo">
                <span className="detail-label">Email:</span>
                <span className="detail-value">john.smith@example.com</span>
            </div>
            <div className="MedicalInfo">
                <span className="detail-label">Medical Info:</span>
                <span className="detail-value">I will kill myself when coding this</span>
            </div>
            <div className="StatusInfo">
                <span className="detail-label">Status:</span>
                <span className="detail-value">Active</span>
            </div>

            <div className="Time">
                <span className="detail-label">Client Since:</span>
                <span className="detail-value">Invalid Date</span>
            </div>


        </div>

    )

}
export default ClientInformation