import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function WeatherTable({ weatherData }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleStarClick = (date) => {
    setSelectedDate(date);
  };
  
  // console.log("In weatherTable")
  // console.log(weatherData);
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
            <th>Details</th>
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
              <td>
                  <Link to={{ pathname: `/details/${data.date}`}}>⭐️</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WeatherTable;
