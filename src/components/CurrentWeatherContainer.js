import React from "react";
import LocationContainer from "./LocationContainer";
import TempContainer from "./TempContainer";
import WeatherContainer from "./WeatherContainer";

function CurrentWeatherContainer({ weather }) {
  return (
    <>
      <LocationContainer
        country={weather.sys.country}
        location={weather.name}
      />
      <TempContainer feels={Math.round(weather.main.feels_like)} />
      <WeatherContainer weather={weather.weather[0].main} />
    </>
  );
}

export default CurrentWeatherContainer;
