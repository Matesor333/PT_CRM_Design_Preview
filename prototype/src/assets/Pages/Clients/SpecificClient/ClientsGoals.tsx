import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBook} from "@fortawesome/free-solid-svg-icons";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


function Goals(){



    const clientGoalsData = {
        goals: [
            "Get in shape",
            "Loose 10 KG"
        ]
    };
    const clientWeight=[
        {week:38,
            weight:90,
        },
        {week:39,
        weight:89,},
        {week:40,
        weight:87,},
        {week:41,weight:90,},
        {week:42,weight:92,},
        {week:43,weight:88,},
        {week:44,weight:87,},
        {week:45,weight:88,},
        {week:46,weight:86,},
        {week:47,weight:82,},
        {week:48,weight:80,},

    ]

    return(
        <div className="goals-card">
            <div className="goals-title">
                <span>
                    <FontAwesomeIcon icon={faBook} /> <span>Goals</span>
                </span>
            </div>
            {clientGoalsData.goals.map((goal, index) => (
                <div className="goals" key={index}>
                    <span>{goal}</span>
                </div>
            ))}
            <div className="weightChart" style={{ marginTop: '20px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#333', marginBottom: '15px' }}>Weekly Weight Progress</h3>
                <ResponsiveContainer width="100%" height={200}>
                    <LineChart
                        data={clientWeight}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 10,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
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
                            label={{ value: 'Weight (kg)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' } }}
                            domain={[70, 'auto']}
                        />
                        <Tooltip 
                            contentStyle={{
                                backgroundColor: 'white',
                                border: '1px solid #e0e0e0',
                                borderRadius: '8px',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                            }}
                            formatter={(value) => [`${value} kg`, 'Weight']}
                            labelFormatter={(week) => `Week ${week}`}
                        />
                        <Line 
                            type="monotone" 
                            dataKey="weight" 
                            stroke="#82ca9d" 
                            activeDot={{ r: 8 }}
                            strokeWidth={3}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>



        </div>


    )
}
export default Goals;
