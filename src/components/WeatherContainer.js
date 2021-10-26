import React from "react";
import { Box, Container, Typography } from "@material-ui/core";

function WeatherContainer({ variant, weather }) {
  return (
    <Box>
      <Container className='weather-container'>
        <Typography variant={variant} align='center' color='secondary'>
          {weather}
        </Typography>
      </Container>
    </Box>
  );
}

export default WeatherContainer;
