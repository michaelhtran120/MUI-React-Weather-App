import React from "react";
import { Box, Button, Container, TextField, InputAdornment } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "../styles/styles";

function SearchBar({ handleSearch, onChange, value }) {
    const classes = useStyles();
    return (
        <Box marginBottom={3}>
            <Container maxWidth='sm'>
                <TextField
                    variant='standard'
                    type='text'
                    fullWidth
                    color='secondary'
                    placeholder='Enter Location...'
                    onChange={onChange}
                    value={value}
                    onKeyPress={handleSearch}
                    InputProps={{
                        className: classes.input,
                        endAdornment: (
                            <InputAdornment>
                                <IconButton style={{ backgroundColor: "transparent" }} disableRipple='true' color='secondary' onClick={handleSearch}>
                                    <SearchIcon fontSize='large' />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    className={classes.input}
                />
            </Container>
        </Box>
    );
}

export default SearchBar;
