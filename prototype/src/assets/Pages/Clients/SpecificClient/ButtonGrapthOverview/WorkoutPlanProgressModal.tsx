import React, { useMemo, useState } from 'react';
import '../SpecificClientPage.css';

// Reuse the structure from Add-Workout-Plan
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

export interface WorkoutPlanShape {
  name: string;
  weeks: number;
  startDate: string;
  days: WorkoutDay[];
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  workoutPlan: WorkoutPlanShape | null;
}

const WorkoutPlanProgressModal: React.FC<Props> = ({ isOpen, onClose, workoutPlan }) => {
  const [values, setValues] = useState<Record<string, string>>({});

  const weeks = useMemo(() => {
    const total = Math.max(1, workoutPlan?.weeks || 1);
    return Array.from({ length: total }, (_, i) => i + 1);
  }, [workoutPlan?.weeks]);

  if (!isOpen || !workoutPlan) return null;

  const handleChange = (key: string, val: string) => {
    setValues((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <div className="progress-modal-overlay" onClick={onClose}>
      <div className="progress-modal" onClick={(e) => e.stopPropagation()}>
        <div className="progress-modal-header">
          <h2>{workoutPlan.name} – Progress</h2>
          <button className="close-button" onClick={onClose}>✕</button>
        </div>

        <div className="progress-meta">
          <div><strong>Start:</strong> {workoutPlan.startDate || '—'}</div>
          <div><strong>Weeks:</strong> {workoutPlan.weeks}</div>
        </div>

        <div className="excel-table">
          <div className="excel-row excel-header">
            <div className="excel-cell sticky-left">Exercise</div>
            {weeks.map((w) => (
              <div key={w} className="excel-cell">Week {w}</div>
            ))}
          </div>

          {workoutPlan.days.map((day) => (
            <React.Fragment key={day.id}>
              <div className="excel-row day-divider">
                <div className="excel-cell sticky-left" style={{ fontWeight: 600 }}>{day.name}</div>
                {weeks.map((w) => (
                  <div key={w} className="excel-cell day-spacer">&nbsp;</div>
                ))}
              </div>
              {day.exercises.map((ex) => (
                <div key={ex.id} className="excel-row">
                  <div className="excel-cell sticky-left">
                    <div className="exercise-name">{ex.name || 'Exercise'}</div>
                    <div className="exercise-meta">Sets: {ex.sets} • Reps: {ex.repRange} • Rest: {ex.restTime}</div>
                  </div>
                  {weeks.map((w) => {
                    const key = `${day.id}-${ex.id}-w${w}`;
                    return (
                      <div key={w} className="excel-cell">
                        <input
                          className="excel-input"
                          type="text"
                          placeholder="kg / reps"
                          value={values[key] || ''}
                          onChange={(e) => handleChange(key, e.target.value)}
                        />
                      </div>
                    );
                  })}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>

        <div className="progress-actions">
          <button className="btn btn--outline" onClick={onClose}>Close</button>
          <button className="btn btn--primary" onClick={onClose}>Save (local)</button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPlanProgressModal;
