import { makeStyles, createTheme } from "@material-ui/core/styles";
import { amber, blueGrey } from "@material-ui/core/colors";

export const useStyles = makeStyles({
  input: {
    "& .MuiInput-underline:before": {
      borderBottom: "2px solid white",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "2px solid white",
    },
    margin: "15px 0px",
    color: "white !important",
    fontSize: "24px !important",
  },
  card: {
    minWidth: "200px",
    backgroundColor: "rgba(0,0,0, 0.3)",
    color: "white",
  },
  forecast: {
    position: "relative ",
    bottom: 0,
  },
});

export const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[100],
    },
    secondary: {
      main: amber[400],
    },
  },
});
