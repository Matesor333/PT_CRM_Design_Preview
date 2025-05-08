//import Header from "../../Header.tsx";
import TotalClients from "./Dashboard cards/DB_Total_Clients.tsx";
import UpcomingSesion from "./Dashboard cards/DB_Revenue.tsx";
import PendingTasks from "./Dashboard cards/DB_Pending_Task.tsx";
import RecentClientActivity from "./Dashboard cards/DB_Recent_Client_Activity.tsx";
import QuickActions from "./Dashboard cards/DB_Quick_Actions.tsx";

function DashBoard() {
    return (
        <div className="dashboard-grid">
            <TotalClients />
            <UpcomingSesion />
            <PendingTasks />
            <RecentClientActivity />
            <QuickActions />
        </div>
    )
}

export default DashBoard
