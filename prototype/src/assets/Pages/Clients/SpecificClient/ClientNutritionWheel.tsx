import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const nutritionData = {
    calories: [
        { value: 150, name: "current" }, // Current calorie intake
        { value: 1850, name: "remaining" },   // Remaining calories
    ],
    macros: [
        { id: 0, value: 120, label: 'Protein', color: '#3f51b5', unit: 'g', target: 140 },
        { id: 1, value: 180, label: 'Carbs', color: '#ff9800', unit: 'g', target: 200 },
        { id: 2, value: 60, label: 'Fat', color: '#9c27b0', unit: 'g', target: 70 }
    ]
};

// Colors for the calorie chart
const CALORIE_COLORS = ['#FF5252', '#4CAF50']; // Red for consumed, green for remaining

// Custom tooltip to show additional information
const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: any[] }) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;

        if (data.label) { // Macro data
            return (
                <div style={{ background: 'white', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}>
                    <p><strong>{data.label}:</strong> {data.value}{data.unit}</p>
                    <p>Target: {data.target}{data.unit}</p>
                    <p>Progress: {Math.round((data.value / data.target) * 100)}%</p>
                </div>
            );
        } else { // Calorie data
            //const totalCalories = 2000; // Daily limit

            return (
                <div style={{ background: 'white', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}>
                    {data.name === 'current' ?
                        <p><strong>Consumed:</strong> {data.value} cal</p> :
                        <p><strong>Remaining:</strong> {data.value} cal</p>
                    }
                    <p>Daily limit: 2000 cal</p>
                </div>
            );
        }
    }
    return null;
};

const NutritionChart = () => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <PieChart>
                {/* Inner pie for calories */}
                <Pie
                    data={nutritionData.calories}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                >
                    {nutritionData.calories.map((_entry, index) => (
                        <Cell key={`cell-${index}`} fill={CALORIE_COLORS[index % CALORIE_COLORS.length]} />
                    ))}
                </Pie>

                {/* Outer pie for macros */}
                <Pie
                    data={nutritionData.macros}
                    dataKey="value"
                    nameKey="label"
                    cx="50%"
                    cy="50%"
                    innerRadius={90}
                    outerRadius={120}
                    label={({label, value}) => `${label}: ${value}g`}
                >
                    {nutritionData.macros.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Pie>

                <Tooltip content={<CustomTooltip />} />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default NutritionChart;

