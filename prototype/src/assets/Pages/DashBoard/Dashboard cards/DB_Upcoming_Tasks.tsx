

function UpcomingTasks() {


    return(

        <div className="Upcoming-Tasks">


            <div className="Heder-Tasks">
                <h3>Upcoming Tasks</h3>
                <select name="cars" id="cars">
                    <option value="Day">Today</option>
                    <option value="Week">7 Days</option>
                    <option value="Month">Month</option>

                </select>
            </div>
            <div className="Allert-Body">

                <span>Create new workout for John smith </span>
                <span>Review progress of John Smith </span>
            </div>
        </div>

    );
};
export default UpcomingTasks;