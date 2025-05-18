
import ClientInformation from "./ClientInformation.tsx";
import Goals from "./ClientsGoals.tsx";
import ClientOverwie from "./ClientOverwie.tsx";

import NutritionChart from "./ClientNutritionWheel.tsx";


function SpecificClientPage() {

    return(
        <div className="dashboard-grid">
            <ClientInformation/>
            <Goals/>
            <NutritionChart/>
            <ClientOverwie/>

        </div>
    )
}
export default SpecificClientPage;
