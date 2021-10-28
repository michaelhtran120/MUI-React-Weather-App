import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { useStyles } from "../styles/styles";
import WeatherContainer from "./WeatherContainer";

function HourlyForecastDisplay({ weather, hourData }) {
  const classes = useStyles();

  let hour = new Date(hourData.dt * 1000).getHours();
  return (
    <Card variant='outlined' className={classes.cardWarm}>
      <CardContent>
        <Typography variant='h6' align='center' color='secondary'>
          {hour > 12 ? hour - 12 : hour} {hour < 12 ? "AM" : "PM"}
        </Typography>
        <Typography variant='h6' align='center' color='primary'>
          {Math.round(hourData.temp)}°F
        </Typography>
        <Typography variant='h6' align='center' color='secondary'>
          {hourData.weather[0].main}
        </Typography>
      </CardContent>
      {/* <CardContent>
        <Typography variant='h6' align='center' color='secondary'>
          {hour}
        </Typography>
        <br />
        <Typography variant='h6' component='p' align='center' color='primary'>
          High: {Math.round(day.temp.max)}°F
        </Typography>
        <Typography variant='h6' component='p' align='center' color='primary'>
          Low: {Math.round(day.temp.min)}°F
        </Typography>
        <WeatherContainer variant='h6' weather={day.weather[0].main} />
      </CardContent> */}
    </Card>
  );
}

export default HourlyForecastDisplay;
