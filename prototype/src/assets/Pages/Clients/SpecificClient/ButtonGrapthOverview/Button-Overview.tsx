import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import UpcomingSession from "../../../DashBoard/Dashboard cards/DB_Upcoming_Session.tsx";
import UpcomingTasks from "../../../DashBoard/Dashboard cards/DB_Upcoming_Tasks.tsx";


function ProgressMetricsChart() {
    const data = [
        {
            week: '38',
            chest: 4000, // Baseline week
            arms: 240,
            legs: 2400,
            back:3500,
        },
        {
            week: '39',
            chest: 4150, // Small increase in chest volume
            arms: 245, // Slight arms progression
            legs: 2500,
            back:3550,// Starting to focus on legs
        },
        {
            week: '40',
            chest: 4300, // Continued chest progress
            arms: 255, // Steady arms progression
            legs: 2650,
            back:3550,// Good leg improvement
        },
        {
            week: '41',
            chest: 4250, // Slight decrease (deload week)
            arms: 270, // Arms still improving despite chest deload
            legs: 2800,
            back:3560,// Strong leg progress
        },
        {
            week: '42',
            chest: 4450, // Post-deload rebound for chest
            arms: 265, // Small setback in arms (recovery needed)
            legs: 2800,
            back:3600,// Maintained leg performance
        },
        {
            week: '43',
            chest: 4550, // Continued chest gains
            arms: 285, // Significant arms breakthrough after recovery
            legs: 3000,
            back:3650,// Big jump in leg performance
        },
        {
            week: '44',
            chest: 4700, // Peak chest performance
            arms: 305, // Peak arms performance
            legs: 3200,
            back:3650,// Strong finishing leg performance
        },
    ];

        return (
    <>
                <div className="chart-container">
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart
                            data={data}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 20,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5"/>
                            <XAxis 
                                dataKey="week" 
                                tick={{fill: '#666'}}
                                axisLine={{stroke: '#e0e0e0'}}
                                tickLine={{stroke: '#e0e0e0'}}
                            />
                            <YAxis 
                                tick={{fill: '#666'}}
                                axisLine={{stroke: '#e0e0e0'}}
                                tickLine={{stroke: '#e0e0e0'}}
                            />
                            <Tooltip 
                                contentStyle={{
                                    backgroundColor: 'white',
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                            <Legend 
                                verticalAlign="top" 
                                height={36}
                                iconType="circle"
                            />
                            <Line 
                                type="monotone" 
                                dataKey="arms" 
                                stroke="#8884d8" 
                                activeDot={{r: 8}}
                                strokeWidth={3}
                            />
                            <Line 
                                type="monotone" 
                                dataKey="chest" 
                                stroke="#82ca9d"
                                strokeWidth={3}
                            />
                            <Line 
                                type="monotone" 
                                dataKey="legs" 
                                stroke="#7D54AD"
                                strokeWidth={3}
                            />
                            <Line
                                type="monotone"
                                dataKey="back"
                                stroke="#E4080A"
                                strokeWidth={3}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="grid">
                    <UpcomingSession/>
                    <UpcomingTasks/>
                </div>
</>
        )

}
export default ProgressMetricsChart;
