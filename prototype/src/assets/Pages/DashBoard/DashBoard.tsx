//import Header from "../../Header.tsx";
import TotalClients from "./Dashboard cards/DB_Total_Clients.tsx";
import UpcomingSesion from "./Dashboard cards/DB_Revenue.tsx";
import UpcomingSession from "./Dashboard cards/DB_Upcoming_Session.tsx";
import UpcomingTasks from "./Dashboard cards/DB_Upcoming_Tasks.tsx";
import RecentClientActivity from "./Dashboard cards/DB_Recent_Client_Activity.tsx";
import QuickActions from "./Dashboard cards/DB_Quick_Actions.tsx";
import Alerts from "./Dashboard cards/DB_Alerts.tsx";

function DashBoard() {
    return (
        <div className="dashboard-grid">
            <TotalClients />
            <UpcomingSesion />
            <Alerts />
            <UpcomingSession/>
            <UpcomingTasks/>
            <QuickActions />
            <RecentClientActivity />

        </div>
    )
}

export default DashBoard
