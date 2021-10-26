import React from "react";
import { Box, Container, Typography } from "@material-ui/core";

function WeatherContainer({ weather, weatherDesc }) {
  return (
    <Box>
      <Container className='weather-container'>
        <Typography variant='h4' align='center' color='secondary'>
          {weather}
        </Typography>
      </Container>
    </Box>
  );
}

export default WeatherContainer;
