
const NutritionPlan = () => {
    // Sample data for current workouts - you would replace this with your actual data
    const currentMealPlan = [
        {
            id: 4,
            week: "Week of May 12, 2025",
            focus: "Weight Loss",
            achievements: "1500 cal",
            pdf:"Show Pdf"
        }
    ];

    // Sample data from the image for past workouts
    const pastMealPlan = [
        {
            id: 1,
            week: "Week of May 14, 2024",
            focus: "bulk",
            achievements: "3500",
            pdf:"Show Pdf"
        },
        {
            id: 2,
            week: "Week of May 14, 2024",
            focus: "bulk",
            achievements: "3500",
            pdf:"Show Pdf"
        },
        {
            id: 3,
            week: "Week of May 14, 2024",
            focus: "bulk",
            achievements: "3500",
            pdf:"Show Pdf"
        }
    ];

    return (
        <div className="workout-tracker">
            {/* Current Workouts Section */}
            <div className="current-workouts">
                <h2>Current Nutrition Plan</h2>
                {currentMealPlan.map(workout => (
                    <div key={workout.id} className="workout-card">
                        <h3>{workout.week}</h3>
                        <p>Focus: {workout.focus}</p>
                        <p>Notable achievements: {workout.achievements}</p>
                        <p>{workout.pdf}</p>
                    </div>
                ))}
            </div>

            {/* Past Workout Plans Section */}
            <div className="past-workouts">
                <h2>Past Nutrition Plan</h2>
                {pastMealPlan.map(workout => (
                    <div key={workout.id} className="workout-card">
                        <h3>{workout.week}</h3>
                        <p>Focus: {workout.focus}</p>
                        <p>Notable achievements: {workout.achievements}</p>
                        <p>{workout.pdf}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NutritionPlan;
