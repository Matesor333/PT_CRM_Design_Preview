import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'


const localizer = momentLocalizer(moment)

function callendarPt() {
    // Get current date for sample events
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    // Sample events data - replace with your actual data
    const myTasksList = [
        {
            id: 1,
            title: 'Session with John Smith',
            start: new Date(currentYear, currentMonth, 15, 10, 0),
            end: new Date(currentYear, currentMonth, 15, 11, 0),
        },
        {
            id: 2,
            title: 'Review progress with Jane Doe',
            start: new Date(currentYear, currentMonth, 17, 14, 0),
            end: new Date(currentYear, currentMonth, 17, 15, 30),
        },
        {
            id: 3,
            title: 'Nutrition plan review',
            start: new Date(currentYear, currentMonth, 22, 9, 0),
            end: new Date(currentYear, currentMonth, 22, 10, 0),
        },
    ];

    return (
        <div className="calendar-container">
            <Calendar
                localizer={localizer}
                events={myTasksList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc(100vh - 180px)', minHeight: '500px' }}
                views={['month', 'week', 'day', 'agenda']}
                defaultView="month"
                popup
                selectable
                drilldownView="day"
                eventPropGetter={() => ({
                    style: {
                        fontSize: '13px',
                        borderRadius: '4px',
                    }
                })}
            />
        </div>
    );
}

export default callendarPt;
