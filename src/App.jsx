// App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import WeatherTable from './components/WeatherTable';
import SideNav from './components/SideNav';
import StatCard from './components/StatCard';
import DetailView from './routes/DetailedView';
import LineChart from "./components/LineChart";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

Chart.register(CategoryScale);

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [originalWeatherData, setOriginalWeatherData] = useState([]);

  useEffect(() => {
  const fetchWeatherData = async () => {
    try {
      const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=New York&country=US&days=7&key=${API_KEY}`);
      if (response.ok) {
        const { data } = await response.json();
        if (data) {
          const formattedData = data.map(day => ({
            date: day.datetime,
            temp: day.temp,
            max_temp: day.max_temp,
            min_temp: day.min_temp,
            weather: day.weather
          }));
          setWeatherData(formattedData);
          setOriginalWeatherData(formattedData); // Save original data
        } else {
          console.error("Error fetching weather data: Response data is undefined");
        }
      } else {
        console.error("Error fetching weather data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  fetchWeatherData();
}, []);


  const avgMaxTemp = weatherData.reduce((sum, data) => sum + data.max_temp, 0) / weatherData.length;
  const avgMinTemp = weatherData.reduce((sum, data) => sum + data.min_temp, 0) / weatherData.length;

  const searchItems = (inputString) => {
    const filteredData = originalWeatherData.filter(data => data.date.includes(inputString));
    setWeatherData(filteredData);
  }

  const filterSunny = () => {
    const filteredData = originalWeatherData.filter(data => data.weather.description.includes("Sunny"));
    setWeatherData(filteredData);
  }

  const filterCloudy = () => {
    const filteredData = originalWeatherData.filter(data => data.weather.description.includes("clouds"));
    setWeatherData(filteredData);
  }

  const filterRainy = () => {
    const filteredData = originalWeatherData.filter(data => data.weather.description.includes("rain"));
    setWeatherData(filteredData);
  }

  const resetFilters = async () => {
    setWeatherData(originalWeatherData);
  };

  const chartData = {
    labels: weatherData.map(day => day.date),
    datasets: [
      {
        label: 'Max Temperature (°C)',
        data: weatherData.map(day => day.max_temp),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Min Temperature (°C)',
        data: weatherData.map(day => day.min_temp),
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      }
    ]
  };

  return (
    <div className="App">
      {/* <SideNav /> */}
      <h2>Weather Forecast for New York City</h2>
      <div className="chart-outer-container">
        <LineChart chartData={chartData} />
      </div>

      <div className="statsContainer">
        <StatCard title="Total Days" value={weatherData.length} />
        <StatCard title="Avg Max Temp (°C)" value={avgMaxTemp.toFixed(2)} />
        <StatCard title="Avg Min Temp (°C)" value={avgMinTemp.toFixed(2)} />
      </div>
      
      <input type="text" className="search-bar" placeholder="Search Date"
        onChange={(inputString) => searchItems(inputString.target.value)}/>
      <button type="button" className="button" onClick={filterSunny}>☀️</button>
      <button type="button" className="button" onClick={filterCloudy}>⛅</button>
      <button type="button" className="button" onClick={filterRainy}>🌧️</button>
      <button type="button" className="button" onClick={resetFilters}>Reset</button>
      <WeatherTable weatherData={weatherData} />
      {/* <DetailView weatherData={weatherData} /> */}
    </div>
  );
}

export default App;
