import ProgressMetricsChart from "./ButtonGrapthOverview/Button-Overview.tsx";
import WorkoutTracker from "./ButtonGrapthOverview/Button-Workout-Plan.tsx";
import { useState } from "react";
import NutritionPlan from "./ButtonGrapthOverview/Button-Nutrition-plan.tsx";

function ClientOverwie() {
    const [activeView, setActiveView] = useState("overview");

    return(

        <div className="Client-Overview">

            <div className="Head-Buttons">
                <button 
                    className={`btn-Overview ${activeView === "overview" ? "active" : ""}`}
                    onClick={() => setActiveView("overview")}
                >
                    Overview
                </button>
                <button 
                    className={`btn-Overview ${activeView === "workout" ? "active" : ""}`}
                    onClick={() => setActiveView("workout")}
                >
                    Workout Plan
                </button>
                <button 
                    className={`btn-Overview ${activeView === "nutrition" ? "active" : ""}`}
                    onClick={() => setActiveView("nutrition")}
                >
                    Nutrition Plan
                </button>
                <button 
                    className={`btn-Overview ${activeView === "gallery" ? "active" : ""}`}
                    onClick={() => setActiveView("gallery")}
                >
                    Gallery
                </button>
                <button 
                    className={`btn-Overview ${activeView === "notes" ? "active" : ""}`}
                    onClick={() => setActiveView("notes")}
                >
                    Notes
                </button>
            </div>

            {activeView === "overview" && <ProgressMetricsChart />}
            {activeView === "workout" && <WorkoutTracker />}
            {activeView==="nutrition" && <NutritionPlan />}
            {/* Add other views as they become available */}

        </div>

    );
};
export default ClientOverwie;
