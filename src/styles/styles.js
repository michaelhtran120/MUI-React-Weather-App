import { makeStyles, createTheme } from "@material-ui/core/styles";
import { amber, blueGrey } from "@material-ui/core/colors";
import { SportsRugbySharp } from "@material-ui/icons";

export const useStyles = makeStyles({
  input: {
    margin: "15px 0px",
    color: "white",
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
