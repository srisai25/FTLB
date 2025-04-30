import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
  const [selectedCity, setSelectedCity] = useState("Delhi");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "dc0924cad2176417816ece4d4741e88c";

  const cities = [
    "Delhi",
    "Mumbai",
    "Chennai",
    "Bangalore",
    "Hyderabad",
    "Kolkata",
    "Pune",
    "Ahmedabad"
  ];

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      setWeather(res.data);
    } catch (err) {
      setError("Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(selectedCity);
  }, [selectedCity]);

  const handleChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div className="p-4 bg-blue-100 rounded-xl shadow-md max-w-sm">
      <h2 className="text-lg font-bold mb-3 text-gray-800">Select a city</h2>

      <label className="block mb-2 font-medium text-gray-700">
        Indian Cities:
      </label>
      <select
        value={selectedCity}
        onChange={handleChange}
        className="mb-4 p-2 rounded border border-gray-300 w-full"
      >
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>

      {loading && <p>Loading weather...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {weather && !loading && (
        <div>
          <h2 className="text-xl font-semibold mb-2">{weather.name} Weather</h2>
          <p className="text-2xl">{weather.main.temp}°C</p>
          <p className="capitalize">{weather.weather[0].description}</p>
          <p className="text-sm text-gray-600">
            Humidity: {weather.main.humidity}% | Wind: {weather.wind.speed} m/s
          </p>
        </div>
      )}
    </div>
  );
};

export default Weather;
