import React from "react";
import { Box, Container, TextField, InputAdornment } from "@material-ui/core";
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
                    placeholder='  Enter Location...'
                    onChange={onChange}
                    value={value}
                    onKeyPress={handleSearch}
                    className={classes.input}
                    InputProps={{
                        className: classes.input,
                        endAdornment: (
                            <InputAdornment position='end'>
                                <IconButton style={{ backgroundColor: "transparent" }} disableRipple={true} color='secondary' onClick={handleSearch}>
                                    <SearchIcon fontSize='large' />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </Container>
        </Box>
    );
}

export default SearchBar;
