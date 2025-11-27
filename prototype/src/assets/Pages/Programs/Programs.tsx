import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faEdit, faPlus, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Programs.css';

function Programs(){
    const navigate = useNavigate();

    const handleProgramClick = (programId) => {
        navigate(`/programs/${programId}`);
    };

    const programsList = [
        {
            id: 1,
            name:"1o1 Coaching",
            startDate:"01.01.2025",
            endDate:null,
            description:"General information for everyone"
        },
        {   
            id: 2,
            name:"Weight Loss",
            startDate:"01.01.2025",
            endDate:"01.04.2025",
            description:"Weight loss tips and tricks"
        },
    ];
    return(
        <div className="programs-container">
            <div className="programs-header">
                <div className="programs-title-section">
                    <h2>Training Programs</h2>
                    <p>Manage your training programs</p>
                </div>
                <div className="programs-actions">
                    <div className="search-container">
                        <FontAwesomeIcon icon={faSearch} className="search-icon"/>
                        <input 
                            type="text" 
                            className="search-input" 
                            placeholder="Search programs..."
                        />
                    </div>
                    <button className="add-program-btn">
                        <FontAwesomeIcon icon={faPlus}/>
                        <span>New Program</span>
                    </button>
                </div>
            </div>
            <div className="programs-grid">
                {programsList.map(program => (
                    <div 
                        className="program-card" 
                        key={program.id} 
                        onClick={() => handleProgramClick(program.id)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="program-header">
                            <h3 className="program-name">{program.name}</h3>
                            <div className="program-actions" onClick={(e) => e.stopPropagation()}>
                                <button 
                                    className="action-btn view-btn" 
                                    title="View"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleProgramClick(program.id);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                                </button>
                                <button className="action-btn edit-btn" title="Edit">
                                    <FontAwesomeIcon icon={faEdit}/>
                                </button>
                                <button className="action-btn delete-btn" title="Delete">
                                    <FontAwesomeIcon icon={faTrash}/>
                                </button>
                            </div>
                        </div>
                        <div className="program-details">
                            <p className="program-description">{program.description}</p>
                            <div className="program-dates">
                                <div>
                                    <span className="date-label">Start:</span>
                                    <span className="date-value">{program.startDate}</span>
                                </div>
                                <div>
                                    <span className="date-label">End:</span>
                                    <span className={`date-value ${program.endDate === null ? 'no-end' : ''}`}>
                                        {program.endDate || 'Ongoing'}
                                    </span>n
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Programs
