import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import './Add-Workout-Plan.css';

interface Exercise {
    id: number;
    name: string;
    sets: number;
    repRange: string;
    restTime: string;
    tempo: string;
}

interface WorkoutDay {
    id: number;
    name: string;
    exercises: Exercise[];
}

interface AddWorkoutPlanProps {
    isOpen: boolean;
    onClose: () => void;
    onAddWorkoutPlan: (workoutPlan: {
        name: string;
        weeks: number;
        startDate: string;
        days: WorkoutDay[];
    }) => void;
}

const AddWorkoutPlan: React.FC<AddWorkoutPlanProps> = ({ isOpen, onClose, onAddWorkoutPlan }) => {
    const [name, setName] = useState('');
    const [weeks, setWeeks] = useState(1);
    const [startDate, setStartDate] = useState('');
    const [days, setDays] = useState<WorkoutDay[]>([]);
    const [currentDayId, setCurrentDayId] = useState(0);

    // Add a new day to the workout plan
    const handleAddDay = () => {
        const newDay: WorkoutDay = {
            id: currentDayId,
            name: `Day ${days.length + 1}`,
            exercises: []
        };
        setDays([...days, newDay]);
        setCurrentDayId(currentDayId + 1);
    };

    // Update the name of a day
    const handleDayNameChange = (dayId: number, newName: string) => {
        setDays(days.map(day => 
            day.id === dayId ? { ...day, name: newName } : day
        ));
    };

    // Remove a day from the workout plan
    const handleRemoveDay = (dayId: number) => {
        setDays(days.filter(day => day.id !== dayId));
    };

    // Add a new exercise to a day
    const handleAddExercise = (dayId: number) => {
        const day = days.find(d => d.id === dayId);
        if (!day) return;

        const newExercise: Exercise = {
            id: day.exercises.length > 0 ? Math.max(...day.exercises.map(e => e.id)) + 1 : 0,
            name: '',
            sets: 3,
            repRange: '8-12',
            restTime: '60s',
            tempo: '2-0-2-0'
        };

        setDays(days.map(day => 
            day.id === dayId 
                ? { ...day, exercises: [...day.exercises, newExercise] } 
                : day
        ));
    };

    // Update an exercise
    const handleExerciseChange = (dayId: number, exerciseId: number, field: keyof Exercise, value: string | number) => {
        setDays(days.map(day => 
            day.id === dayId 
                ? { 
                    ...day, 
                    exercises: day.exercises.map(exercise => 
                        exercise.id === exerciseId 
                            ? { ...exercise, [field]: value } 
                            : exercise
                    ) 
                } 
                : day
        ));
    };

    // Remove an exercise from a day
    const handleRemoveExercise = (dayId: number, exerciseId: number) => {
        setDays(days.map(day => 
            day.id === dayId 
                ? { ...day, exercises: day.exercises.filter(exercise => exercise.id !== exerciseId) } 
                : day
        ));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!name || !startDate || weeks < 1) {
            alert('Please fill in all required fields');
            return;
        }

        // Submit the form
        onAddWorkoutPlan({
            name,
            weeks,
            startDate,
            days
        });

        // Reset form
        setName('');
        setWeeks(1);
        setStartDate('');
        setDays([]);
        setCurrentDayId(0);

        // Close popup
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="add-workout-popup-overlay">
            <div className="add-workout-popup">
                <div className="add-workout-popup-header">
                    <h2>Create Workout Plan</h2>
                    <button className="close-button" onClick={onClose}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="workoutName">Workout Name</label>
                        <input
                            type="text"
                            id="workoutName"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="weeks">Number of Weeks</label>
                            <input
                                type="number"
                                id="weeks"
                                min="1"
                                value={weeks}
                                onChange={(e) => setWeeks(parseInt(e.target.value))}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="startDate">Start Date</label>
                            <input
                                type="date"
                                id="startDate"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="days-section">
                        <div className="section-header">
                            <h3>Workout Days</h3>
                            <button 
                                type="button" 
                                className="add-button"
                                onClick={handleAddDay}
                            >
                                <FontAwesomeIcon icon={faPlus} />
                                <span>Add Day</span>
                            </button>
                        </div>

                        {days.length === 0 && (
                            <div className="empty-state">
                                <p>No workout days added yet. Click "Add Day" to start building your workout plan.</p>
                            </div>
                        )}

                        {days.map(day => (
                            <div key={day.id} className="day-card">
                                <div className="day-header">
                                    <input
                                        type="text"
                                        value={day.name}
                                        onChange={(e) => handleDayNameChange(day.id, e.target.value)}
                                        placeholder="Day Name"
                                        className="day-name-input"
                                    />
                                    <button 
                                        type="button" 
                                        className="remove-button"
                                        onClick={() => handleRemoveDay(day.id)}
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </div>

                                <div className="exercises-section">
                                    <div className="section-header">
                                        <h4>Exercises</h4>
                                        <button 
                                            type="button" 
                                            className="add-button small"
                                            onClick={() => handleAddExercise(day.id)}
                                        >
                                            <FontAwesomeIcon icon={faPlus} />
                                            <span>Add Exercise</span>
                                        </button>
                                    </div>

                                    {day.exercises.length === 0 && (
                                        <div className="empty-state small">
                                            <p>No exercises added yet. Click "Add Exercise" to add exercises to this day.</p>
                                        </div>
                                    )}

                                    {day.exercises.map(exercise => (
                                        <div key={exercise.id} className="exercise-card">
                                            <div className="exercise-header">
                                                <input
                                                    type="text"
                                                    value={exercise.name}
                                                    onChange={(e) => handleExerciseChange(day.id, exercise.id, 'name', e.target.value)}
                                                    placeholder="Exercise Name"
                                                    className="exercise-name-input"
                                                    required
                                                />
                                                <button 
                                                    type="button" 
                                                    className="remove-button small"
                                                    onClick={() => handleRemoveExercise(day.id, exercise.id)}
                                                >
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </button>
                                            </div>
                                            <div className="exercise-details">
                                                <div className="detail-group">
                                                    <label>Sets</label>
                                                    <input
                                                        type="number"
                                                        min="1"
                                                        value={exercise.sets}
                                                        onChange={(e) => handleExerciseChange(day.id, exercise.id, 'sets', parseInt(e.target.value))}
                                                        required
                                                    />
                                                </div>
                                                <div className="detail-group">
                                                    <label>Rep Range</label>
                                                    <input
                                                        type="text"
                                                        value={exercise.repRange}
                                                        onChange={(e) => handleExerciseChange(day.id, exercise.id, 'repRange', e.target.value)}
                                                        placeholder="e.g. 8-12"
                                                        required
                                                    />
                                                </div>
                                                <div className="detail-group">
                                                    <label>Rest Time</label>
                                                    <input
                                                        type="text"
                                                        value={exercise.restTime}
                                                        onChange={(e) => handleExerciseChange(day.id, exercise.id, 'restTime', e.target.value)}
                                                        placeholder="e.g. 60s"
                                                        required
                                                    />
                                                </div>
                                                <div className="detail-group">
                                                    <label>Tempo</label>
                                                    <input
                                                        type="text"
                                                        value={exercise.tempo}
                                                        onChange={(e) => handleExerciseChange(day.id, exercise.id, 'tempo', e.target.value)}
                                                        placeholder="e.g. 2-0-2-0"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="form-actions">
                        <button type="button" className="cancel-button" onClick={onClose}>
                            Cancel
                        </button>
                        <button type="submit" className="submit-button">
                            Create Workout Plan
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddWorkoutPlan;