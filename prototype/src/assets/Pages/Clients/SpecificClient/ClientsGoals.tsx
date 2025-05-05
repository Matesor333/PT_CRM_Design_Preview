import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBook} from "@fortawesome/free-solid-svg-icons";


function Goals(){


    return(
        <div className="goals-card">
            <div className="goals-title">
                <span>
                    <FontAwesomeIcon icon={faBook} />Goals
                </span>
            </div>
            <div className="goals">
                <span>Get in shape</span>

            </div>
            <div className="goals">
                <span>Loose 10 kg</span>

            </div>



        </div>


    )
}
export default Goals;