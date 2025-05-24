
import ClientInformation from "./ClientInformation.tsx";
import Goals from "./ClientsGoals.tsx";
import ClientOverwie from "./ClientOverwie.tsx";
import NutritionChart from "./ClientNutritionWheel.tsx";
import "./SpecificClientPage.css";


function SpecificClientPage() {

    return(
        <>
            <div className="specific-footer">
                <button className="back-button">Back</button>
                <h2>Jhon Smith</h2>
                <button className="schedule-sesion">Schedule Session</button>
                <button className="new-task">New Task</button>
            </div>
            <div className="dashboard-grid">

                <ClientInformation/>
                <Goals/>
                <NutritionChart/>


            </div>
            <ClientOverwie/>
        </>
    )
}
export default SpecificClientPage;
