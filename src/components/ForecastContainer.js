import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "../styles/styles";
import WeatherContainer from "./WeatherContainer";
import dateBuilder from "./Hooks/dateBuilder";

function ForecastContainer({ forecast }) {
  const classes = useStyles();

  return (
    <Grid
      sx={{ width: "100%" }}
      container
      spacing={1}
      justifyContent='center'
      columns={7}
    >
      {forecast.map((day) => {
        let date = dateBuilder(new Date(day.dt * 1000));
        return (
          <Grid item xs={9} sm={4} md={4} lg={3}>
            <Card variant='outlined' className={classes.card}>
              <CardContent>
                <Typography variant='h6' align='center' color='secondary'>
                  {date}
                </Typography>
                <br />
                <Typography
                  variant='h6'
                  component='p'
                  align='center'
                  color='primary'
                >
                  High: {Math.round(day.temp.max)}°F
                </Typography>
                <Typography
                  variant='h6'
                  component='p'
                  align='center'
                  color='primary'
                >
                  Low: {Math.round(day.temp.min)}°F
                </Typography>
                <WeatherContainer variant='h6' weather={day.weather[0].main} />
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default ForecastContainer;
