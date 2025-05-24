//import Header from "../../Header.tsx";
import TotalClients from "./Dashboard cards/DB_Total_Clients.tsx";
import UpcomingSesion from "./Dashboard cards/DB_Revenue.tsx";
import UpcomingSession from "./Dashboard cards/DB_Upcoming_Session.tsx";
import UpcomingTasks from "./Dashboard cards/DB_Upcoming_Tasks.tsx";
import RecentClientActivity from "./Dashboard cards/DB_Recent_Client_Activity.tsx";
import QuickActions from "./Dashboard cards/DB_Quick_Actions.tsx";
import Alerts from "./Dashboard cards/DB_Alerts.tsx";
import "./Dashboard.css";
import AddClient from '../pop-ups/Add-Client';
import React, { useState } from 'react';

function DashBoard() {
    const [isAddClientOpen, setIsAddClientOpen] = useState(false);

    const handleAddClient = (newClient) => {
        // Here you would typically add the client to your database or state
        // For now, we'll just log the new client to the console
        console.log('New client added:', newClient);
        // Close the popup
        setIsAddClientOpen(false);
    };

    const programList = [
        {
            id: 0,
            name: "1o1 Coaching"
        },
        {
            id: 1,
            name: "Group Fat-Loss"
        }
    ];
    return (
        <>
            <div className="dashboard-grid">
                <TotalClients />
                <UpcomingSesion />
                <Alerts />
                <UpcomingSession/>
                <UpcomingTasks/>
                <QuickActions openAddClientPopup={() => setIsAddClientOpen(true)} />
                <RecentClientActivity />
            </div>

            <AddClient 
                isOpen={isAddClientOpen}
                onClose={() => setIsAddClientOpen(false)}
                onAddClient={handleAddClient}
                programs={programList}
            />
        </>
    )
}

export default DashBoard
