import { Container, Typography } from "@mui/material";
import React from "react";

const Pay = () => {
  return (
    <Container sx={{ p: 10 }}>
      <Typography variant="h2">
        Payment Gateway Is <span className="text-danger">Comming Soon</span>
      </Typography>
    </Container>
  );
};

export default Pay;
