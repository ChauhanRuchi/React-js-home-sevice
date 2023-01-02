import * as React from "react";
import Stack from "@mui/material/Stack";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function CustomizedSnackbars() {

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Alert severity="error">This is an error message!</Alert>
    </Stack>
  );
}
