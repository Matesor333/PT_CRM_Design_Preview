
import React, { useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import '../SpecificClientPage.css';
import AddWorkoutPlan from "../../../pop-ups/Add-Workout-Plan.tsx";
import WorkoutPlanProgressModal, { WorkoutPlanShape } from './WorkoutPlanProgressModal';

const WorkoutTracker = () => {
    const [isAddWorkoutOpen, setIsAddWorkoutOpen] = useState(false);
    const [isProgressOpen, setIsProgressOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState<WorkoutPlanShape | null>(null);

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

    // Sample plan to demonstrate the progress modal (structure mirrors Add-Workout-Plan)
    const samplePlan: WorkoutPlanShape = useMemo(() => ({
        name: 'Hypertrophy Block',
        weeks: 8,
        startDate: '2025-05-12',
        days: [
            {
                id: 1,
                name: 'Day 1 - Upper',
                exercises: [
                    { id: 11, name: 'Bench Press', sets: 4, repRange: '6-8', restTime: '120s', tempo: '2-0-2-0' },
                    { id: 12, name: 'Incline DB Press', sets: 3, repRange: '8-12', restTime: '90s', tempo: '2-0-2-0' },
                    { id: 13, name: 'Lat Pulldown', sets: 3, repRange: '10-12', restTime: '75s', tempo: '2-1-2-0' }
                ]
            },
            {
                id: 2,
                name: 'Day 2 - Lower',
                exercises: [
                    { id: 21, name: 'Back Squat', sets: 5, repRange: '3-5', restTime: '150s', tempo: '2-1-2-1' },
                    { id: 22, name: 'RDL', sets: 3, repRange: '6-8', restTime: '120s', tempo: '3-0-2-0' },
                    { id: 23, name: 'Leg Press', sets: 3, repRange: '10-12', restTime: '90s', tempo: '2-0-2-0' }
                ]
            }
        ]
    }), []);

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

    const openProgress = () => {
        setSelectedPlan(samplePlan);
        setIsProgressOpen(true);
    };

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
                    <div key={workout.id} className="workout-card" onClick={openProgress} role="button" tabIndex={0}>
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
                    <div key={workout.id} className="workout-card" onClick={openProgress} role="button" tabIndex={0}>
                        <h3>{workout.week}</h3>
                        <p>Focus: {workout.focus}</p>
                        <p>Notable achievements: {workout.achievements}</p>
                    </div>
                ))}
            </div>

            <AddWorkoutPlan
                isOpen={isAddWorkoutOpen}
                onClose={() => setIsAddWorkoutOpen(false)}
                onAddWorkoutPlan={handleAddWorkoutPlan}
            />

            <WorkoutPlanProgressModal
                isOpen={isProgressOpen}
                onClose={() => setIsProgressOpen(false)}
                workoutPlan={selectedPlan}
            />
        </div>
    );
};

export default WorkoutTracker;
