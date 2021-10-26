import React from "react";
import { Box, Container, Typography } from "@material-ui/core";

function TempContainer({ feels }) {
  return (
    <Box marginBottom={2}>
      <Container className='temp-container'>
        <Typography variant='h4' align='center' color='primary'>
          Feels like: {feels}° F
        </Typography>
      </Container>
    </Box>
  );
}

export default TempContainer;
