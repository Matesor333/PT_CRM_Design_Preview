import Header from "../../../Header.tsx";
import Navigation from "../../../Navigation.tsx";
import ClientInformation from "./ClientInformation.tsx";
function SpecificClientPage() {

    return(
        <div className="app-container">
            <Header/>
            <div className="main-content">
                <Navigation/>
                <div className="dashboard-content">
                    <div className="dashboard-grid">
                        <ClientInformation/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SpecificClientPage;