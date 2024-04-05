import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ chartData }) => {
  return (
    <div className="chart-container">
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Max and Min Temperatures for New York City",
            },
            legend: {
              display: false
            }
          }
        }}
      />
     </div>
  );
}

export default LineChart;
