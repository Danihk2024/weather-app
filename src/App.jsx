import React, { useState } from 'react';

const api = {
  key: import.meta.env.WEATHER_KEY,
  base: "https://api.openweathermap.org/data/2.5/"
};

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(null);

  const search = (evt) => {
    if (evt.key === "Enter") {
      setError(null);
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((response) => response.json())
        .then((result) => {
          if (result.cod === "404" || result.cod === 404) {
            setError("City not found. Try another name.");
            setWeather({});
          } else {
            setWeather(result);
            setError(null);
          }
          setQuery('');
        })
        .catch(() => {
          setError("Failed to fetch weather. Check your connection.");
          setWeather({});
        });
    }
  };

  const dateBuilder = (d) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[d.getDay()];
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const isWarm = typeof weather.main !== "undefined" && weather.main.temp > 16;

  return (
    <div className={isWarm ? 'app warm' : 'app'}>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search city..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {error && <div className="error-msg">{error}</div>}
        {typeof weather.main !== "undefined" && (
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°C</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
