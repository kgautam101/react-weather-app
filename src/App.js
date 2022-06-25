import { useState } from "react";
import { convertToUpper, dateBuilder, isWarm } from "./commonUtils";
import "./styles.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [description, setDescription] = useState("");

  const apiInfo = {
    key: "6a87d0a743584f6a4caaa0fa3379447d",
    base: "https://api.openweathermap.org/data/2.5/",
  };
  const search = (e) => {
    if (e.key === "Enter") {
      fetch(
        `${apiInfo.base}weather?q=${query}&units=metric&APPID=${apiInfo.key}`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          setDescription(result.weather[0].description);
        });
    }
  };
  return (
    <div className={isWarm(weather) ? "app warm" : "app"}>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        <div className="location-box">
          {weather.message === "city not found" && (
            <div className="location-not-found">City not found!</div>
          )}
          {weather?.name && (
            <div className="location">
              {weather?.name}, {weather?.sys?.country}
            </div>
          )}
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          {weather?.main?.temp && (
            <div className="temp">{Math.round(weather?.main?.temp)}&deg;c</div>
          )}
          {description && (
            <div className="weather">{convertToUpper(description)}</div>
          )}
        </div>
      </main>
    </div>
  );
}
