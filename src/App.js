import { ThemeProvider } from "@material-ui/core";
import { useState, useEffect, useRef } from "react";
import CurrentWeatherContainer from "./components/CurrentWeatherContainer";
import ErrorMessageContainer from "./components/ErrorMessageContainer";
import SearchBar from "./components/SearchBar";

import { theme } from "./styles/styles";

const api = {
  key: process.env.REACT_APP_WEATHER_API_KEY,
  base: "http://api.openweathermap.org/data/2.5/",
  forecastBase: "https://api.openweathermap.org/data/2.5/onecall?",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [queryError, setQueryError] = useState("");
  const [forecast, setForecast] = useState({});

  const isInitialMount = useRef(true);

  // Fetch data from OpenWeatherMap API and update weather state with response.
  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.cod === "404") {
            throw data;
          } else {
            setWeather(data);
            setQuery("");
            setQueryError("");
          }
        })
        .catch((err) => {
          setQueryError(err.message.toUpperCase());
          setWeather("");
        });
    }
  };

  const fetchForecast = () => {
    fetch(
      `${api.forecastBase}lat=${weather.coord.lat}&lon=${weather.coord.lon}&units=imperial&exclude=minutely&appid=${api.key}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setForecast(data);
      })
      .catch((error) => console.log(error));
  };

  //Prevent update on mount, which allows me to fetch forecast data after inital query of current weather.
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      // If location invalid, do not run functions.
      if (queryError !== "" || !weather) {
        return;
      } else {
        fetchForecast();
      }
    }
  }, [weather]);

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
