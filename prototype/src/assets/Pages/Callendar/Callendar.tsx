import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './Callendar.css'
import React, { useState } from 'react'
import DB_Upcoming_Tasks from "../DashBoard/Dashboard cards/DB_Upcoming_Tasks.tsx";
import DB_Upcoming_Session from "../DashBoard/Dashboard cards/DB_Upcoming_Session.tsx";
import AddEventModal from "./EventPopUp.tsx";


const localizer = momentLocalizer(moment)

// Custom toolbar component to make view selection more prominent
const CustomToolbar = ({ onView, onNavigate, label, view }) => {
  const viewOptions = [
    { key: Views.MONTH, label: 'Month' },
    { key: Views.WEEK, label: 'Week' },
    { key: Views.DAY, label: 'Day' },
    { key: Views.AGENDA, label: 'Agenda' }
  ]

  return (
    <div className="custom-toolbar">
      <div className="toolbar-navigation">
        <button onClick={() => onNavigate('PREV')}>Previous</button>
        <span className="toolbar-label">{label}</span>
        <button onClick={() => onNavigate('NEXT')}>Next</button>
        <button onClick={() => onNavigate('TODAY')} className="today-btn">Today</button>
      </div>
      <div className="toolbar-views">
        {viewOptions.map(option => (
          <button 
            key={option.key}
            className={`view-btn ${view === option.key ? 'active' : ''}`}
            onClick={() => onView(option.key)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}


function callendarPt() {
    // Get current date for sample events
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const [view, setView] = useState('month');
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Sample events data - replace with your actual data
    const [events, setEvents] = useState([
        {
            id: 1,
            clientId:1,
            taskId:2,
            title: 'Session',
            start: new Date(currentYear, currentMonth, 15, 10, 0),
            end: new Date(currentYear, currentMonth, 15, 11, 0),
        },
        {
            id: 2,
            clientId:2,
            taskId:3,
            title: 'Review progress',
            start: new Date(currentYear, currentMonth, 17, 14, 0),
            end: new Date(currentYear, currentMonth, 17, 15, 30),
        },
        {
            id: 3,
            clientId:0,
            taskId:1,
            title: 'Nutrition plan review',
            start: new Date(currentYear, currentMonth, 22, 9, 0),
            end: new Date(currentYear, currentMonth, 22, 10, 0),
        },
    ]);

    // Handle adding a new event
    const handleAddEvent = (newEvent) => {
        setEvents([...events, newEvent]);
    };

    const [clients, setClients] = useState([
        {
            id: 1,
            firstName: "John",
            lastName: "Smith",
            email: "john.smith@example.com",
            phone: "(555) 123-4567",
            programId: 0
        },
        {
            id: 2,
            firstName: "Alberta",
            lastName: "Neviem",
            email: "Alberta@example.com",
            phone: 858555845,
            programId: 0
        },
        {
            id: 3,
            firstName: "Matus",
            lastName: "Ill",
            email: "Matus@example.com",
            phone: 858555845,
            programId: 1
        },
        {
            id: 4,
            firstName: "Sarah",
            lastName: "Johnson",
            email: "sarah.johnson@example.com",
            phone: "(555) 234-5678",
            programId: 1
        },
        {
            id: 5,
            firstName: "Michael",
            lastName: "Brown",
            email: "michael.brown@example.com",
            phone: "(555) 345-6789",
            programId: 0
        },
        {
            id: 6,
            firstName: "Emily",
            lastName: "Davis",
            email: "emily.davis@example.com",
            phone: "(555) 456-7890",
            programId: 1
        },
        {
            id: 7,
            firstName: "David",
            lastName: "Wilson",
            email: "david.wilson@example.com",
            phone: "(555) 567-8901",
            programId: 0
        },
        {
            id: 8,
            firstName: "Jessica",
            lastName: "Martinez",
            email: "jessica.martinez@example.com",
            phone: "(555) 678-9012",
            programId: 1
        },
        {
            id: 9,
            firstName: "Robert",
            lastName: "Taylor",
            email: "robert.taylor@example.com",
            phone: "(555) 789-0123",
            programId: 0
        },
        {
            id: 10,
            firstName: "Jennifer",
            lastName: "Anderson",
            email: "jennifer.anderson@example.com",
            phone: "(555) 890-1234",
            programId: 1
        },
    ]);

    // Handle view change
    const handleViewChange = (newView) => {
        setView(newView);
    };

    // Function to format event titles
    const formatEventTitle = (event) => {
        // If clientId is 0, just show the title
        if (event.clientId === 0) {
            return event.title;
        }

        // Find the client by clientId
        const client = clients.find(c => c.id === event.clientId);

        // If client is found, format as "J. Doe - Title"
        if (client) {
            const firstInitial = client.firstName.charAt(0);
            return `${firstInitial}. ${client.lastName} - ${event.title}`;
        }

        // Fallback to just the title if client not found
        return event.title;
    };

    return (
        <div className="calendar-container">
            <div className="view-selector">
                <h2>Calendar</h2>
                <button className="add-event-button" onClick={() => setIsModalOpen(true)}>
                    + Add Event
                </button>
            </div>
            <div className="calendar-layout">
                <div className="calendar-main">
                    <Calendar
                        localizer={localizer}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: 'calc(100vh - 150px)', minHeight: '500px' }}
                        views={['month', 'week', 'day', 'agenda']}
                        view={view}
                        onView={handleViewChange}
                        defaultView="month"
                        popup
                        selectable
                        drilldownView="day"
                        formats={{
                            // Keep default time formats
                        }}
                        titleAccessor={formatEventTitle}
                        eventPropGetter={(event) => {
                            let backgroundColor = '#4285F4'; // Default color

                            // Color code based on taskId
                            if (event.taskId === 1) {
                                backgroundColor = '#4285F4'; // Blue for tasks
                            } else if (event.taskId === 2) {
                                backgroundColor = '#34a853'; // Green for schedules
                            } else if (event.taskId === 3) {
                                backgroundColor = '#fbbc05'; // Yellow/Orange for general events
                            }

                            return {
                                style: {
                                    backgroundColor,
                                    fontSize: '13px',
                                    borderRadius: '4px',
                                }
                            };
                        }}
                        components={{
                            toolbar: props => <CustomToolbar {...props} />
                        }}
                    />
                </div>
                <div className="calendar-sidebar">
                    <DB_Upcoming_Tasks/>
                    <DB_Upcoming_Session/>
                </div>
            </div>

            {/* Add Event Modal */}
            <AddEventModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                onAddEvent={handleAddEvent} 
                clients={clients} 
            />
        </div>
    );
}

export default callendarPt;
