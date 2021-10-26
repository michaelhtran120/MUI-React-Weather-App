import React from "react";
import { Box, Container, Typography } from "@material-ui/core";

function TempContainer({ variant, temp }) {
  return (
    <Box marginBottom={2}>
      <Container className='temp-container'>
        <Typography variant={variant} align='center' color='primary'>
          Current: {Math.round(temp.feels_like)}° F
        </Typography>
        <Typography variant={variant} align='center' color='primary'>
          High: {Math.round(temp.temp_max)}°F
        </Typography>
        <Typography variant={variant} align='center' color='primary'>
          Low: {Math.round(temp.temp_min)}°F
        </Typography>
      </Container>
    </Box>
  );
}

export default TempContainer;
