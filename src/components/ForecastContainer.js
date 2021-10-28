import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useStyles } from "../styles/styles";
import WeatherContainer from "./WeatherContainer";
import dateBuilder from "./Hooks/dateBuilder";

function ForecastContainer({ forecast }) {
  const classes = useStyles();

  return (
    // <Grid
    //   container
    //   spacing={1}
    //   direction='row'
    //   justifyContent='center'
    //   columns={7}
    // >
    <Container>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}
      >
        <Button variant='outlined' color='primary'>
          Daily
        </Button>
        <Button variant='outlined' color='primary'>
          Hourly
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          overflow: "hidden",
          overflowX: "scroll",
          maxWidth: "90%",
          margin: "0 auto",
        }}
      >
        {forecast.map((day) => {
          let date = dateBuilder(new Date(day.dt * 1000));
          return (
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
          );
        })}
      </Box>
    </Container>
  );
}

export default ForecastContainer;
