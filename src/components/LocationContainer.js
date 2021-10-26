import React from "react";
import { Container, Typography, Box } from "@material-ui/core";

const dateBuilder = (d) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
};

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
