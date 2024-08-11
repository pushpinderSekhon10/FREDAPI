import { Line } from "react-chartjs-2";

function LineChart ({cData}) {


    return (
        <div className="chart-container">
        <Line
            data={cData}

            options={{
                plugins: {

                    title: {
                        display: true,
                        text: "GDP in US Dollars"
                    },

                    legend: {
                        display: false
                    }
                },

                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }}
      />    
        </div>
    )
}

export default LineChart;