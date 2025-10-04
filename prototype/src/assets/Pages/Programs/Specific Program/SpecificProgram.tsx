
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './SpecificProgram.css';

function Program() {
    const { programId } = useParams();
    const navigate = useNavigate();
    const [program, setProgram] = useState(null);

    // Mock program data - in a real app, this would come from an API
    const programsData = [
        {
            id: 1,
            title: "1o1 Coaching",
            description: "Personalized coaching sessions tailored to individual needs and goals.",
            startDate: "Jan 1, 2025",
            endDate: "Ongoing",
            status: "Active",
            enrolled: "5/10",
            goals: [
                "Achieve personal fitness goals",
                "Develop personalized workout routines",
                "Create sustainable healthy habits",
                "Track progress effectively"
            ],
            duration: "Ongoing",
            schedule: "By appointment",
            maxCapacity: 10,
            enrolledClients: [
                {
                    id: 1,
                    name: "John Smith",
                    email: "john.smith@example.com",
                    phone: "(555) 123-4567",
                    joinDate: "Jan 5, 2025"
                },
                {
                    id: 2,
                    name: "Alberta Neviem",
                    email: "Alberta@example.com",
                    phone: "858555845",
                    joinDate: "Jan 7, 2025"
                },
                {
                    id: 5,
                    name: "Michael Brown",
                    email: "michael.brown@example.com",
                    phone: "(555) 345-6789",
                    joinDate: "Jan 12, 2025"
                },
                {
                    id: 7,
                    name: "David Wilson",
                    email: "david.wilson@example.com",
                    phone: "(555) 567-8901",
                    joinDate: "Jan 15, 2025"
                },
                {
                    id: 9,
                    name: "Robert Taylor",
                    email: "robert.taylor@example.com",
                    phone: "(555) 789-0123",
                    joinDate: "Jan 20, 2025"
                }
            ],
            materials: [
                {
                    id: 1,
                    title: "Initial Assessment Form",
                    type: "PDF",
                    description: "Form to assess client's initial fitness level and goals",
                    dateAdded: "Jan 5, 2025",
                    fileSize: "245 KB"
                },
                {
                    id: 2,
                    title: "Personalized Workout Plan Template",
                    type: "DOCX",
                    description: "Template for creating customized workout plans",
                    dateAdded: "Jan 10, 2025",
                    fileSize: "1.2 MB"
                },
                {
                    id: 3,
                    title: "Nutrition Basics Guide",
                    type: "PDF",
                    description: "Comprehensive guide to nutrition fundamentals",
                    dateAdded: "Jan 15, 2025",
                    fileSize: "3.5 MB"
                },
                {
                    id: 4,
                    title: "Progress Tracking Spreadsheet",
                    type: "XLSX",
                    description: "Excel template for tracking client progress",
                    dateAdded: "Jan 20, 2025",
                    fileSize: "780 KB"
                },
                {
                    id: 5,
                    title: "Proper Form Video Series",
                    type: "MP4",
                    description: "Video demonstrations of proper exercise form",
                    dateAdded: "Feb 1, 2025",
                    fileSize: "45 MB"
                }
            ]
        },
        {
            id: 2,
            title: "Weight Loss",
            description: "A comprehensive program designed to help clients achieve sustainable weight loss through structured training sessions, nutritional guidance, and continuous support.",
            startDate: "Jan 1, 2025",
            endDate: "Apr 1, 2025",
            status: "Active",
            enrolled: "8/12",
            goals: [
                "Achieve 1-2 lbs fat loss per week",
                "Improve cardiovascular fitness",
                "Build lean muscle mass",
                "Develop healthy eating habits"
            ],
            duration: "12 weeks",
            schedule: "Mon, Wed, Fri - 7:00 AM & 6:00 PM",
            maxCapacity: 12,
            enrolledClients: [
                {
                    id: 3,
                    name: "Matus Ill",
                    email: "Matus@example.com",
                    phone: "858555845",
                    joinDate: "Jan 2, 2025"
                },
                {
                    id: 4,
                    name: "Sarah Johnson",
                    email: "sarah.johnson@example.com",
                    phone: "(555) 234-5678",
                    joinDate: "Jan 3, 2025"
                },
                {
                    id: 6,
                    name: "Emily Davis",
                    email: "emily.davis@example.com",
                    phone: "(555) 456-7890",
                    joinDate: "Jan 5, 2025"
                },
                {
                    id: 8,
                    name: "Jessica Martinez",
                    email: "jessica.martinez@example.com",
                    phone: "(555) 678-9012",
                    joinDate: "Jan 8, 2025"
                },
                {
                    id: 10,
                    name: "Jennifer Anderson",
                    email: "jennifer.anderson@example.com",
                    phone: "(555) 890-1234",
                    joinDate: "Jan 10, 2025"
                }
            ],
            materials: [
                {
                    id: 6,
                    title: "12-Week Weight Loss Curriculum",
                    type: "PDF",
                    description: "Detailed week-by-week program curriculum",
                    dateAdded: "Dec 15, 2024",
                    fileSize: "1.8 MB"
                },
                {
                    id: 7,
                    title: "Calorie Deficit Explained",
                    type: "PDF",
                    description: "Guide explaining the science of calorie deficits",
                    dateAdded: "Dec 20, 2024",
                    fileSize: "450 KB"
                },
                {
                    id: 8,
                    title: "Meal Prep Basics",
                    type: "MP4",
                    description: "Video tutorial on meal preparation for weight loss",
                    dateAdded: "Dec 25, 2024",
                    fileSize: "120 MB"
                },
                {
                    id: 9,
                    title: "HIIT Workout Library",
                    type: "ZIP",
                    description: "Collection of high-intensity interval training workouts",
                    dateAdded: "Jan 5, 2025",
                    fileSize: "25 MB"
                },
                {
                    id: 10,
                    title: "Healthy Recipe Collection",
                    type: "PDF",
                    description: "50+ healthy recipes for weight loss",
                    dateAdded: "Jan 10, 2025",
                    fileSize: "5.2 MB"
                }
            ]
        }
    ];

    useEffect(() => {
        // Find the program with the matching ID
        const foundProgram = programsData.find(p => p.id === parseInt(programId));
        if (foundProgram) {
            setProgram(foundProgram);
        } else {
            // If no program is found, you could redirect to a 404 page or back to programs
            console.error(`Program with ID ${programId} not found`);
            // Uncomment to redirect if program not found
            //navigate('/programs');
        }
    }, [programId, navigate]);

    const handleBackClick = () => {
        navigate('/programs');
    };

    // Show loading state while fetching program data
    if (!program) {
        return <div>Loading program...</div>;
    }

    return (
        <div className="container main-container">
            <header className="program-header">
                <div className="header-content">
                    <div className="header-left">
                        <h1 className="program-title">{program.title}</h1>
                        <p className="program-description">{program.description}</p>
                        <div className="program-meta">
                            <span className="status status--success">
                            <i className="fas fa-circle"></i> {program.status}
                        </span>
                            <span className="program-dates">
                            <i className="fas fa-calendar"></i> {program.startDate} - {program.endDate}
                        </span>
                            <span className="enrollment-count">
                            <i className="fas fa-users"></i> {program.enrolled} enrolled
                        </span>
                        </div>
                    </div>
                    <div className="header-actions">
                        <button className="btn btn--outline">
                            <i className="fas fa-cog"></i> Settings
                        </button>
                        <button className="btn btn--secondary" onClick={handleBackClick}>
                            <i className="fas fa-arrow-left"></i> Back to Programs
                        </button>
                    </div>
                </div>
            </header>
            <div className="content-grid">

                <aside className="program-info">
                    <div className="card">
                        <div className="card__header">
                            <h3>Program Overview</h3>
                        </div>
                        <div className="card__body">
                            <div className="info-section">
                                <h4>Goals & Objectives</h4>
                                <ul className="goals-list">
                                    {program.goals.map((goal, index) => (
                                        <li key={index}><i className="fas fa-check"></i> {goal}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="info-section">
                                <h4>Program Details</h4>
                                <div className="detail-item">
                                    <span className="detail-label">Duration:</span>
                                    <span className="detail-value">{program.duration}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Schedule:</span>
                                    <span className="detail-value">{program.schedule}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Max Capacity:</span>
                                    <span className="detail-value">{program.maxCapacity} clients</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
                <main className="client-management">
                    <div className="card">
                        <div className="card__header">
                            <div className="header-row">
                                <h3>Enrolled Clients</h3>
                                <button className="btn btn--primary add-client-btn">
                                    <i className="fas fa-plus"></i> Add Client
                                </button>
                            </div>
                            <div className="search-container">
                                <div className="search-input">
                                    <i className="fas fa-search"></i>
                                    <input type="text" placeholder="Search clients..." id="clientSearch"/>
                                </div>
                            </div>
                        </div>
                        <div className="card__body">
                            <div className="clients-list" id="clientsList">
                                {program.enrolledClients && program.enrolledClients.map((client) => (
                                    <div className="client-item" key={client.id}>
                                        <div className="client-icon">
                                            <i className="fas fa-user"></i>
                                        </div>
                                        <div className="client-info">
                                            <h4 className="client-name">{client.name}</h4>
                                            <div className="client-details">
                                                <div className="client-detail">
                                                    <span className="detail-label">Email:</span>
                                                    <span className="detail-value">{client.email}</span>
                                                </div>
                                                <div className="client-detail">
                                                    <span className="detail-label">Phone:</span>
                                                    <span className="detail-value">{client.phone}</span>
                                                </div>
                                                <div className="client-detail">
                                                    <span className="detail-label">Joined:</span>
                                                    <span className="detail-value">{client.joinDate}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="client-actions">
                                            <button className="action-btn view-btn" title="View">
                                                <i className="fas fa-eye"></i>
                                            </button>
                                            <button className="action-btn edit-btn" title="Edit">
                                                <i className="fas fa-edit"></i>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>

                <aside className="teaching-materials">
                    <div className="card">
                        <div className="card__header">
                            <div className="header-row">
                                <h3>Teaching Materials</h3>
                                <button className="btn btn--primary add-material-btn">
                                    <i className="fas fa-plus"></i> Add Material
                                </button>
                            </div>
                        </div>
                        <div className="card__body">
                            <div className="materials-list" id="materialsList">
                                {program.materials && program.materials.map((material) => (
                                    <div className="material-item" key={material.id}>
                                        <div className="material-icon">
                                            <i className={`fas fa-${
                                                material.type === 'PDF' ? 'file-pdf' : 
                                                material.type === 'DOCX' ? 'file-word' :
                                                material.type === 'XLSX' ? 'file-excel' :
                                                material.type === 'MP4' ? 'file-video' :
                                                material.type === 'ZIP' ? 'file-archive' : 'file'
                                            }`}></i>
                                        </div>
                                        <div className="material-info">
                                            <h4 className="material-title">{material.title}</h4>
                                            <div className="material-meta">
                                                <span className="material-type">{material.type}</span>
                                                {material.type === 'PDF' && material.fileSize && (
                                                    <span className="material-size">{material.fileSize}</span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="material-actions">
                                            <button className="action-btn view-btn" title="View">
                                                <i className="fas fa-eye"></i>
                                            </button>
                                            <button className="action-btn download-btn" title="Download">
                                                <i className="fas fa-download"></i>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>
            </div>

            <section className="analytics-dashboard">
                <div className="card">
                    <div className="card__header">
                        <h3>Program Analytics</h3>
                    </div>
                    <div className="card__body">
                        <div className="analytics-grid">
                            <div className="metric-card">
                                <div className="metric-value">95%</div>
                                <div className="metric-label">Client Retention</div>
                                <div className="metric-icon">
                                    <i className="fas fa-user-check"></i>
                                </div>
                            </div>
                            <div className="metric-card">
                                <div className="metric-value">60%</div>
                                <div className="metric-label">Avg Progress</div>
                                <div className="metric-icon">
                                    <i className="fas fa-chart-line"></i>
                                </div>
                            </div>
                            <div className="metric-card">
                                <div className="metric-value">88%</div>
                                <div className="metric-label">Attendance Rate</div>
                                <div className="metric-icon">
                                    <i className="fas fa-calendar-check"></i>
                                </div>
                            </div>
                            <div className="metric-card">
                                <div className="metric-value">85%</div>
                                <div className="metric-label">Completion Rate</div>
                                <div className="metric-icon">
                                    <i className="fas fa-trophy"></i>
                                </div>
                            </div>
                            <div className="metric-card">
                                <div className="metric-value">$4,800</div>
                                <div className="metric-label">Revenue Generated</div>
                                <div className="metric-icon">
                                    <i className="fas fa-dollar-sign"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );


}
export default Program
