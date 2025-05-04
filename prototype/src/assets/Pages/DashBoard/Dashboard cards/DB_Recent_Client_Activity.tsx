

function RecentClientActivity() {


    return(

        <div className="RecentClientActivity">
            <div className="headerClientActivity">
            <h3>Recent Client Activity</h3>
                <select name="cars" id="cars">
                    <option value="Day">Today</option>
                    <option value="Week">Last 7 Day</option>
                    <option value="Month">Last Month</option>

                </select>
            </div>
            <h2>No recent activity</h2>

        </div>

    );
};
export default RecentClientActivity;