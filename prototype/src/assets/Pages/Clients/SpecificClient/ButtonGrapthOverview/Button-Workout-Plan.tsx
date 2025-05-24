
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import '../SpecificClientPage.css';
import AddWorkoutPlan from "../../../pop-ups/Add-Workout-Plan.tsx";


const WorkoutTracker = () => {
    const [isAddWorkoutOpen, setIsAddWorkoutOpen] = useState(false);

    // Function to handle adding a new workout
    const handleAddWorkout = () => {
        setIsAddWorkoutOpen(true);
    };

    // Function to handle adding a new workout plan
    const handleAddWorkoutPlan = (workoutPlan) => {
        console.log('New workout plan:', workoutPlan);
        // Here you would typically add the workout plan to your state or database
        // For now, we'll just log it to the console
    };

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
                <div className="workout-header">
                    <h2>Current Workout Plans</h2>
                    <button 
                        onClick={handleAddWorkout}
                        className="add-workout-btn"
                    >
                        <FontAwesomeIcon icon={faPlus} />
                        <span>Add Workout</span>
                    </button>
                </div>
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

            <AddWorkoutPlan

                isOpen={isAddWorkoutOpen}
                onClose={() => setIsAddWorkoutOpen(false)}
                onAddWorkoutPlan={handleAddWorkoutPlan}/>
        </div>
    );
};

export default WorkoutTracker;
