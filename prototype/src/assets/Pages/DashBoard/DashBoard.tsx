import Header from "../../Header.tsx";
import Navigation from "../../Navigation.tsx";
import TotalClients from "./Dashboard cards/DB_Total_Clients.tsx";
import UpcomingSesion from "./Dashboard cards/DB_Upcoming_Sesion.tsx";
import PendingTasks from "./Dashboard cards/DB_Pending_Task.tsx";
import RecentClientActivity from "./Dashboard cards/DB_Recent_Client_Activity.tsx";
import QuickActions from "./Dashboard cards/DB_Quick_Actions.tsx";

function DashBoard() {


    return (
        <div className="app-container">
            <Header/>
            <div className="main-content">
                <Navigation/>
                <div className="dashboard-content">
                    <div className="dashboard-grid">
                        <TotalClients />
                        <UpcomingSesion />
                        <PendingTasks />
                        <RecentClientActivity />
                        <QuickActions />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoard
