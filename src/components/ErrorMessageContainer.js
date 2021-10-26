import React from "react";
import { Typography } from "@material-ui/core";

function ErrorMessageContainer({ queryError }) {
  return (
    <Typography variant='h4' color='primary' align='center'>
      {queryError}
    </Typography>
  );
}

export default ErrorMessageContainer;
