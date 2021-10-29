import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { useStyles } from "../styles/styles";
import dateBuilder from "./Hooks/dateBuilder";
import WeatherContainer from "./WeatherContainer";

function DailyForecastDisplay({ weather, day }) {
  const classes = useStyles();

  let date = dateBuilder(new Date(day.dt * 1000));
  return (
    <Card
      variant='outlined'
      // conditionally render different card background depending on main background.
      className={weather.main.temp > "70" ? classes.cardWarm : classes.cardCold}
    >
      <CardContent>
        <Typography variant='h6' align='center' color='secondary'>
          {date}
        </Typography>
        <br />
        <Typography variant='h6' component='p' align='center' color='primary'>
          High: {Math.round(day.temp.max)}°F
        </Typography>
        <Typography variant='h6' component='p' align='center' color='primary'>
          Low: {Math.round(day.temp.min)}°F
        </Typography>
        <WeatherContainer variant='h6' weather={day.weather[0].main} />
      </CardContent>
    </Card>
  );
}

export default DailyForecastDisplay;
