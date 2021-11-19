import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const NotFound = () => {
  return (
    <>
      <Box sx={{ py: 12 }}>
        <Box sx={{ textAlign: "center", p: 6.5 }}>
          <Typography variant="h2">
            <span className="text-danger">404</span> Not Found
          </Typography>
          <Typography variant="h5">Sorry, this page does not exist</Typography>
          <small>
            (The link you clicked might be corrupted, or the page may have been
            removed)
          </small>
        </Box>
      </Box>
    </>
  );
};

export default NotFound;
