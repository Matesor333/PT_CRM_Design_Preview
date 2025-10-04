import React, { useState } from 'react';

// Add Event Modal Component
const AddEventModal = ({ isOpen, onClose, onAddEvent, clients }) => {



    const [title, setTitle] = useState('');
    const [clientId, setClientId] = useState(0);
    const [taskId, setTaskId] = useState(1);
    const [startDate, setStartDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endDate, setEndDate] = useState('');
    const [endTime, setEndTime] = useState('');

    // Reset form when modal is opened
    React.useEffect(() => {
        if (isOpen) {
            const today = new Date();
            const formattedDate = today.toISOString().split('T')[0];
            const hours = today.getHours().toString().padStart(2, '0');
            const minutes = today.getMinutes().toString().padStart(2, '0');
            const formattedTime = `${hours}:${minutes}`;

            setTitle('');
            setClientId(0);
            setTaskId(1);
            setStartDate(formattedDate);
            setStartTime(formattedTime);
            setEndDate(formattedDate);
            setEndTime(formattedTime);
        }
    }, [isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create start and end dates from form inputs
        const start = new Date(`${startDate}T${startTime}`);
        const end = new Date(`${endDate}T${endTime}`);

        // Create new event object
        const newEvent = {
            id: Date.now(), // Use timestamp as unique ID
            clientId: parseInt(clientId),
            taskId: parseInt(taskId),
            title,
            start,
            end,
        };

        onAddEvent(newEvent);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h3>Add New Event</h3>
                    <button className="close-button" onClick={onClose}>×</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Event Title</label>
                        <input 
                            type="text" 
                            id="title" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="client">Client</label>
                        <select 
                            id="client" 
                            value={clientId} 
                            onChange={(e) => setClientId(e.target.value)}
                        >
                            <option value="0">No Client</option>
                            {clients.map(client => (
                                <option key={client.id} value={client.id}>
                                    {client.firstName} {client.lastName}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="taskType">Event Type</label>
                        <select 
                            id="taskType" 
                            value={taskId} 
                            onChange={(e) => setTaskId(e.target.value)}
                        >
                            <option value="1">Task</option>
                            <option value="2">Schedule</option>
                            <option value="3">General Event</option>
                        </select>
                    </div>

                    <div className="form-row">
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
                        <div className="form-group">
                            <label htmlFor="startTime">Start Time</label>
                            <input 
                                type="time" 
                                id="startTime" 
                                value={startTime} 
                                onChange={(e) => setStartTime(e.target.value)} 
                                required 
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="endDate">End Date</label>
                            <input 
                                type="date" 
                                id="endDate" 
                                value={endDate} 
                                onChange={(e) => setEndDate(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="endTime">End Time</label>
                            <input 
                                type="time" 
                                id="endTime" 
                                value={endTime} 
                                onChange={(e) => setEndTime(e.target.value)} 
                                required 
                            />
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
                        <button type="submit" className="submit-button">Add Event</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEventModal;
