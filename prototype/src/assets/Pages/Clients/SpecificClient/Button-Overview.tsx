import { LineChart } from '@mui/x-charts/LineChart';
import DB_Upcoming_Session from "../../DashBoard/Dashboard cards/DB_Upcoming_Session.tsx";
import DB_Upcoming_Tasks from "../../DashBoard/Dashboard cards/DB_Upcoming_Tasks.tsx";

 function ProgressMetricsChart() {
     /*const muscleProgressData = [
         { month: 'Jan', chest: 250, back: 200, legs: 300, shoulders: 150, arms: 100 },
         { month: 'Feb', chest: 300, back: 240, legs: 350, shoulders: 180, arms: 120 },
         { month: 'Mar', chest: 350, back: 280, legs: 400, shoulders: 210, arms: 140 },
         { month: 'Apr', chest: 400, back: 320, legs: 450, shoulders: 240, arms: 160 },
         { month: 'May', chest: 450, back: 360, legs: 500, shoulders: 270, arms: 180 },
         { month: 'Jun', chest: 500, back: 400, legs: 550, shoulders: 300, arms: 200 },
     ];*/

    return (
        <div className="Overview-Progress">
            <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 16] }]}
                series={[
                    {
                        data: [30, 35, 35, 40, 45, 50,30, 35,40],
                        valueFormatter: (value) => (value == null ? 'NaN' : value.toString()),
                    },
                    {
                        data: [35, 30, 40, 30, 5.5, 2, 8.5, 1.5, 5],
                    },
                    {
                        data: [7, 8, 5, 4, 5, 15, 2, 5.5, 1],
                        valueFormatter: (value) => (value == null ? '?' : value.toString()),
                    },
                ]}
                height={200}
                margin={{ bottom: 10 }}
            />
            <div className="Overview-Bellow-Cards"></div>
            <DB_Upcoming_Session/>
            <DB_Upcoming_Tasks/>
        </div>
    )
}
export default ProgressMetricsChart;