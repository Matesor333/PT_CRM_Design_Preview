
import {Link} from "react-router-dom";

function UpcomingSession() {


    return(

        <div className="Upcoming-Session">


            <div className="Heder-Sessions">
                <h3>Upcoming Sessions</h3>
                <select name="cars" id="cars">
                    <option value="Day">Today</option>
                    <option value="Week">7 Days</option>
                    <option value="Month">Month</option>

                </select>
            </div>
            <div className="Allert-Body">
                <div className="Alert-Header">
                    <div className="Alert-Header-Name">Name</div>
                    <div className="Alert-Header-Date">Date</div>
                    <div className="Alert-Header-Calendar"><Link to="/callendar">
                        View Calendar
                    </Link></div>
                </div>
                <div className="Alert-Body-Sessions">
                    <span className="Alert-Name">John Smith</span>
                    <span className="Alert-Date" >Today</span>
                    <span className="Alert-Calenadr">16:50</span>
                </div>
                <div className="Alert-Body-Sessions">
                    <span className="Alert-Name">John Smith</span>
                    <span className="Alert-Date" >14.5</span>
                    <span className="Alert-Calenadr">16:50</span>
                </div>
            </div>
        </div>

    );
};
export default UpcomingSession;