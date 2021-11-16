import { ThemeProvider } from "@material-ui/core";
import { useState, useEffect, useRef } from "react";
import CurrentWeatherContainer from "./components/CurrentWeatherContainer";
import ErrorMessageContainer from "./components/ErrorMessageContainer";
import ForecastContainer from "./components/ForecastContainer";
import LineChartContainer from "./components/LineChartContainer";
import SearchBar from "./components/SearchBar";
import { fetchWeatherData, fetchForecastData } from "./components/Hooks/fetchWeather";

import { theme } from "./styles/styles";

import { useStyles } from "./styles/styles";

function App() {
    const [query, setQuery] = useState("");
    const [weather, setWeather] = useState({});
    const [queryError, setQueryError] = useState("");
    const [dailyForecast, setDailyForecast] = useState([]);
    const [hourlyForecast, setHourlyForecast] = useState([]);
    const [dailyActive, setDailyActive] = useState(true);

    const classes = useStyles();

    // Fetch data from OpenWeatherMap API and update weather state with response.
    const search = async (e) => {
        if (e.key === "Enter" || e.type === "click") {
            if (query === "" && Object.keys(weather).length === 0) {
                setQueryError("Please enter a location!");
            } else if (query === "" && weather) {
                return;
            } else {
                try {
                    const data = await fetchWeatherData(query);
                    if (data.cod === "404") {
                        throw data;
                    } else {
                        setWeather(data);
                        setQuery("");
                        setQueryError("");
                        setDailyActive(true);
                    }
                } catch (err) {
                    console.log(err);
                    setQueryError(err.message.toUpperCase());
                    setWeather("");
                }
            }
        }
    };

    //Prevent update on mount, which allows me to fetch forecast data after inital query of current weather. Only update if weather state changes.
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            // If location invalid, do not run functions.
            if (Object.keys(weather).length === 0) {
                return;
            } else {
                // fetchForecast();
                (async () => {
                    const data = await fetchForecastData(weather.coord.lat, weather.coord.lon);
                    try {
                        setDailyForecast(data.daily);
                        setHourlyForecast(data.hourly);
                    } catch (err) {
                        console.log(err);
                    }
                })();
            }
        }
    }, [weather]);

    const toggleDaily = () => {
        setDailyActive(true);
    };
    const toggleHourly = () => {
        setDailyActive(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <div
                // Conditionally render background image depending on temperature.
                className={typeof weather.main !== "undefined" ? (weather.main.temp > "70" ? "app" : "app cold") : "app"}
            >
                <main>
                    <SearchBar handleSearch={search} value={query} onChange={(e) => setQuery(e.target.value)} />
                    {/* Conditionally render data interface after API call. If no data found, render error msg */}
                    {typeof weather.main !== "undefined" ? (
                        <>
                            <CurrentWeatherContainer weather={weather} />
                        </>
                    ) : (
                        <></>
                    )}
                    {/* If query is incorrect, render error message */}
                    {queryError !== "" ? <ErrorMessageContainer queryError={queryError} /> : <></>}

                    {/* Only render forecast data if query is correct and data is retrieved for current weather info */}
                    {typeof weather.main !== "undefined" && dailyForecast ? (
                        <>
                            <section className={classes.forecast}>
                                <ForecastContainer
                                    weather={weather}
                                    toggleDaily={toggleDaily}
                                    toggleHourly={toggleHourly}
                                    dailyActive={dailyActive}
                                    // Pass daily or hourly forecast data depending on, which data is being requested (dailyActive state)
                                    forecast={dailyActive ? dailyForecast.slice(1) : hourlyForecast.slice(1, 13)}
                                />
                            </section>
                            <section>
                                <LineChartContainer
                                    dailyActive={dailyActive}
                                    // Pass daily or hourly forecast data depending on, which data is being requested (dailyActive state)
                                    forecast={dailyActive ? dailyForecast : hourlyForecast.slice(0, 13)}
                                />
                            </section>
                        </>
                    ) : (
                        <></>
                    )}
                </main>
            </div>
        </ThemeProvider>
    );
}

export default App;
