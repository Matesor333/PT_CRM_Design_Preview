
const WorkoutTracker = () => {
    // Sample data for current workouts - you would replace this with your actual data
    const currentWorkouts = [
        {
            id: 1,
            week: "Week of May 12, 2025",
            focus: "Endurance",
            achievements: "Running 5k under 25 minutes"
        }
    ];

    // Sample data from the image for past workouts
    const pastWorkouts = [
        {
            id: 1,
            week: "Week of May 14, 2024",
            focus: "Hypertrophy",
            achievements: "Increased bench press by 10lbs"
        },
        {
            id: 2,
            week: "Week of May 7, 2024",
            focus: "Strength",
            achievements: "New squat PR"
        },
        {
            id: 3,
            week: "Week of April 30, 2024",
            focus: "Form and Technique",
            achievements: "Improved deadlift form"
        }
    ];

    return (
        <div className="workout-tracker">
            {/* Current Workouts Section */}
            <div className="current-workouts">
                <h2>Current Workout Plans</h2>
                {currentWorkouts.map(workout => (
                    <div key={workout.id} className="workout-card">
                        <h3>{workout.week}</h3>
                        <p>Focus: {workout.focus}</p>
                        <p>Notable achievements: {workout.achievements}</p>
                    </div>
                ))}
            </div>

            {/* Past Workout Plans Section */}
            <div className="past-workouts">
                <h2>Past Workout Plans</h2>
                {pastWorkouts.map(workout => (
                    <div key={workout.id} className="workout-card">
                        <h3>{workout.week}</h3>
                        <p>Focus: {workout.focus}</p>
                        <p>Notable achievements: {workout.achievements}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkoutTracker;
