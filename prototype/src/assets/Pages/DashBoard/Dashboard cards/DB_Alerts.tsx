import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleExclamation} from "@fortawesome/free-solid-svg-icons";

function Alerts() {


    return(

        <div className="Alert-Card">

            <h3><FontAwesomeIcon icon={faCircleExclamation} />Alerts</h3>
            <div className="Allert-Body">
                <span>3 Clients have not logged in yet</span>
                <span>Late payment from John Smith</span>
                <span>I Dont know what should I put here</span>
            </div>
        </div>

    );
};
export default Alerts;