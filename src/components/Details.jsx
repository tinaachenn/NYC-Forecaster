import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const Details = () => {
  const { date } = useParams();
  const [weatherData, setWeatherData] = useState(null);

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
              weather: day.weather,
              wind_speed: day.wind_spd,
              wind_direction: day.wind_dir,
              precipitation: day.precip,
              uv_index: day.uv
            }));
            const selectedData = formattedData.find(day => day.date === date);
            setWeatherData(selectedData);
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
  }, [date]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details">
      <h3>Date: {weatherData.date} </h3>
      <h3>Temp: {weatherData.temp} (°C)</h3>
      <h3>Max Temp: {weatherData.max_temp} (°C)</h3>
      <h3>Min Temp: {weatherData.min_temp} (°C)</h3>
      <h3>Weather Description: {weatherData.weather && weatherData.weather.description}</h3>
      <h3>Wind Speed: {weatherData.wind_speed} m/s</h3>
      <h3>Wind Direction: {weatherData.wind_direction}</h3>
      <h3>Precipitation: {weatherData.precipitation} mm</h3>
      <h3>UV Index: {weatherData.uv_index}</h3>
    </div>
  );
};

export default Details;
