import React from "react";
import { Box, Container, TextField } from "@material-ui/core";
import { useStyles } from "../styles/styles";

function SearchBar(props) {
  const classes = useStyles();
  return (
    <Box marginBottom={3}>
      <Container maxWidth='sm'>
        <TextField
          variant='standard'
          type='text'
          placeholder='Search...'
          fullWidth
          color='secondary'
          placeholder='Enter Location...'
          onChange={props.onChange}
          value={props.value}
          onKeyPress={props.keyPress}
          InputProps={{
            className: classes.input,
          }}
          className={classes.input}
        />
      </Container>
    </Box>
  );
}

export default SearchBar;
