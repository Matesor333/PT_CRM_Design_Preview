import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faUser
} from '@fortawesome/free-solid-svg-icons';
function ClientInformation(){



    const clientInforamtion={

        age:"46 (01.01.1979)",
        heightMetric:"197",
        weightMetric:"90",
        medicalInfo:"Celiac Desiese",
        status:"active",
        clientSince:"Inavlid Date"

    }
    return(
        <div className="ClientInformation">

            <div className="info">
                <FontAwesomeIcon icon={faUser} />
                <span>Client Information</span>
            </div>
            <div className="MedicalInfo">
                <span className="detail-label">Age:</span>
                <span className="detail-value">{clientInforamtion.age} </span>
            </div>
            <div className="height-weight-info">
                <span className="detail-label">Height:</span>
                <span className="detail-value">{clientInforamtion.heightMetric} CM </span>
                <span className="detail-label">Weight:</span>
                <span className="detail-value">{clientInforamtion.weightMetric} KG</span>
            </div>
            <div className="MedicalInfo">
                <span className="detail-label">Medical Info:</span>
                <span className="detail-value">{clientInforamtion.medicalInfo}</span>
            </div>
            <div className="StatusInfo">
                <span className="detail-label">Status:</span>
                <span className="detail-value">{clientInforamtion.status}</span>
            </div>

            <div className="Time">
                <span className="detail-label">Client Since:</span>
                <span className="detail-value">{clientInforamtion.clientSince}</span>
            </div>


        </div>

    )

}
export default ClientInformation