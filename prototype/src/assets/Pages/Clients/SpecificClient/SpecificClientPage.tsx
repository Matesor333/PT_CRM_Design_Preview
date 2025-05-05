import Header from "../../../Header.tsx";
import Navigation from "../../../Navigation.tsx";
import ClientInformation from "./ClientInformation.tsx";
import Goals from "./ClientsGoals.tsx";
function SpecificClientPage() {

    return(
        <div className="app-container">
            <Header/>
            <div className="main-content">
                <Navigation/>
                <div className="dashboard-content">
                    <div className="dashboard-grid">
                        <ClientInformation/>
                        <Goals/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SpecificClientPage;