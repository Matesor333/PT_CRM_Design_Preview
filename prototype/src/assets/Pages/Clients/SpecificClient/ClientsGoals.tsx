import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBook} from "@fortawesome/free-solid-svg-icons";


function Goals(){



    const clientGoalsData = {
        goals: [
            "Get in shape",
            "Loose 10 KG"
        ]
    };
    return(
        <div className="goals-card">
            <div className="goals-title">
                <span>
                    <FontAwesomeIcon icon={faBook} />Goals
                </span>
            </div>
            {clientGoalsData.goals.map((goal, index) => (
                <div className="goals" key={index}>
                    <span>{goal}</span>
                </div>
            ))}



        </div>


    )
}
export default Goals;