import { Container, Grid, Typography } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import React from "react";

const Services = () => {
  return (
    <Container
      sx={{
        flexGrow: 1,
        color: "white",
        my: 6,
        width: "100%",
      }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={4}>
          <Typography component="div" sx={{ p: 8, backgroundColor: "#E22937" }}>
            <Typography sx={{ fontFamily: "monospace" }}>
              <DirectionsCarIcon />
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "monospace",
                py: 2,

                fontWeight: "900",
              }}>
              Buy and Sale Vehiclese
            </Typography>
            <Typography sx={{ fontFamily: "monospace" }}>
              We buy and sale barand new car and also used car of any brand
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Typography component="div" sx={{ p: 8, backgroundColor: "#052046" }}>
            <Typography sx={{ fontFamily: "monospace" }}>
              <DirectionsCarIcon />
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "monospace",
                py: 2,

                fontWeight: "900",
              }}>
              Buy and Sale Vehiclese
            </Typography>
            <Typography sx={{ fontFamily: "monospace" }}>
              We buy and sale barand new car and also used car of any brand
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Typography component="div" sx={{ p: 8, backgroundColor: "#000" }}>
            <Typography sx={{ fontFamily: "monospace" }}>
              <DirectionsCarIcon />
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "monospace",
                py: 2,

                fontWeight: "900",
              }}>
              Buy and Sale Vehiclese
            </Typography>
            <Typography sx={{ fontFamily: "monospace" }}>
              We buy and sale barand new car and also used car of any brand
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Services;
