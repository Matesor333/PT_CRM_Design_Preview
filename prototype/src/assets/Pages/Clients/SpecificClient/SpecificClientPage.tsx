
import ClientInformation from "./ClientInformation.tsx";
import Goals from "./ClientsGoals.tsx";
function SpecificClientPage() {

    return(
        <div className="dashboard-grid">
            <ClientInformation/>
            <Goals/>
        </div>
    )
}
export default SpecificClientPage;
