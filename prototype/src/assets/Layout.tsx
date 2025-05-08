import { Outlet } from "react-router-dom";
import Navigation from "./Navigation.tsx";

function Layout() {
    return (
        <div className="app-container">
            <div className="main-content">
                <Navigation />
                <div className="dashboard-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Layout;