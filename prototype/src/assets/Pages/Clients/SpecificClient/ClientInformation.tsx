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
            <div className="MedicalInfo">
                <span className="detail-label">Age:</span>
                <span className="detail-value">46 (01.01.1979) </span>
            </div>
            <div className="height-weight-info">
                <span className="detail-label">Height:</span>
                <span className="detail-value">197cm</span>
                <span className="detail-label">Weight:</span>
                <span className="detail-value">90kg</span>
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