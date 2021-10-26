import { makeStyles, createTheme } from "@material-ui/core/styles";
import { amber, blueGrey } from "@material-ui/core/colors";

export const useStyles = makeStyles({
  input: {
    borderRadius: 5,
    margin: "15px 0px",
    color: "white",
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
