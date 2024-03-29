import React from 'react';

function WeatherTable({ weatherData }) {
  return (
    <div className="weatherTable">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Average Temp (°C)</th>
            <th>Max Temp (°C)</th>
            <th>Min Temp (°C)</th>
            <th>Weather Description</th>
          </tr>
        </thead>
        <tbody>
          {weatherData.map((data, index) => (
            <tr key={index}>
              <td>{data.date}</td>
              <td>{data.temp}</td>
              <td>{data.max_temp}</td>
              <td>{data.min_temp}</td>
              <td>{data.weather && data.weather.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WeatherTable;
