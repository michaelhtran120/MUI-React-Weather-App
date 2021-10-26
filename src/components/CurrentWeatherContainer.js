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
      <TempContainer variant='h4' temp={weather.main} />
      <WeatherContainer variant='h4' weather={weather.weather[0].main} />
    </>
  );
}

export default CurrentWeatherContainer;
