import React from "react";
import { Container, Typography, Box } from "@material-ui/core";
import dateBuilder from "./Hooks/dateBuilder";

function LocationContainer({ location, country }) {
  return (
    <Box marginBottom={3}>
      <Container className='location-container'>
        <Typography variant='h2' align='center' color='primary'>
          {location}, {country}
        </Typography>
        <Typography variant='h4' align='center' color='secondary'>
          {dateBuilder(new Date())}
        </Typography>
      </Container>
    </Box>
  );
}

export default LocationContainer;
