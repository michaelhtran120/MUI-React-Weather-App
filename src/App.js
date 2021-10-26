import { ThemeProvider } from "@material-ui/core";
import { useState } from "react";
import "./App.css";
import CurrentWeatherContainer from "./components/CurrentWeatherContainer";
import ErrorMessageContainer from "./components/ErrorMessageContainer";
import SearchBar from "./components/SearchBar";

import { theme } from "./styles/styles";

const api = {
  key: process.env.REACT_APP_WEATHER_API_KEY,
  base: "http://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [queryError, setQueryError] = useState("");

  // Fetch data from OpenWeatherMap API and update weather state with response.
  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.cod === "404") {
            console.log("error");
            console.log(data);
            setQueryError(data.message);
            setWeather("");
          } else {
            setWeather(data);
            setQuery("");
            setQueryError("");
            console.log(data);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        // Conditionally render background image depending on temperature.
        className={
          typeof weather.main !== "undefined"
            ? weather.main.temp > "70"
              ? "app"
              : "app cold"
            : "app"
        }
      >
        <main>
          <SearchBar
            keyPress={search}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {/* Conditionally render data interface after API call. If no data found, render error msg */}
          {typeof weather.main !== "undefined" ? (
            <>
              <CurrentWeatherContainer weather={weather} />
            </>
          ) : (
            <></>
          )}
          {queryError !== "" ? (
            <ErrorMessageContainer queryError={queryError} />
          ) : (
            <></>
          )}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
