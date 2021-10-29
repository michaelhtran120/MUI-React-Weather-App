import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { useStyles } from "../styles/styles";

function HourlyForecastDisplay({ weather, hourData }) {
  const classes = useStyles();

  let hour = new Date(hourData.dt * 1000).getHours();
  return (
    <Card
      variant='outlined'
      // conditionally render different card background depending on main background.
      className={weather.main.temp > "70" ? classes.cardWarm : classes.cardCold}
    >
      <CardContent>
        <Typography variant='h6' align='center' color='secondary'>
          {/* Switch from military time to standard time and conditionally render AM / PM depending on military time value */}
          {hour > 12 ? hour - 12 : hour} {hour < 12 ? "AM" : "PM"}
        </Typography>
        <Typography variant='h6' align='center' color='primary'>
          {Math.round(hourData.temp)}°F
        </Typography>
        <Typography variant='h6' align='center' color='secondary'>
          {hourData.weather[0].main}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default HourlyForecastDisplay;
