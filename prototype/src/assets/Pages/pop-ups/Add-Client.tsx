import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './Add-Client.css';

interface AddClientProps {
    isOpen: boolean;
    onClose: () => void;
    onAddClient: (client: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        programId: number;
        notes?: string;
        goals?: string;
    }) => void;
    programs: { id: number; name: string }[];
}

const AddClient: React.FC<AddClientProps> = ({ isOpen, onClose, onAddClient, programs }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [programId, setProgramId] = useState<number>(0);
    const [notes, setNotes] = useState('');
    const [goals, setGoals] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!firstName || !lastName || !email || !phone) {
            alert('Please fill in all required fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Submit the form
        onAddClient({
            firstName,
            lastName,
            email,
            phone,
            programId,
            notes,
            goals
        });

        // Reset form
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setProgramId(0);
        setNotes('');
        setGoals('');

        // Close popup
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="add-client-popup-overlay">
            <div className="add-client-popup">
                <div className="add-client-popup-header">
                    <h2>Add New Client</h2>
                    <button className="close-button" onClick={onClose}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="program">Program</label>
                        <select
                            id="program"
                            value={programId}
                            onChange={(e) => setProgramId(Number(e.target.value))}
                        >
                            {programs.map(program => (
                                <option key={program.id} value={program.id}>
                                    {program.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="notes">Notes <span className="optional-label">(optional)</span></label>
                        <textarea
                            id="notes"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            rows={3}
                            placeholder="Add any additional notes about the client"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="goals">Goals <span className="optional-label">(optional)</span></label>
                        <textarea
                            id="goals"
                            value={goals}
                            onChange={(e) => setGoals(e.target.value)}
                            rows={3}
                            placeholder="What are the client's fitness goals?"
                        />
                    </div>
                    <div className="form-actions">
                        <button type="button" className="cancel-button" onClick={onClose}>
                            Cancel
                        </button>
                        <button type="submit" className="submit-button">
                            Add Client
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddClient;
