import React from "react";
import "./Banner.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <Grid
        container
        spacing={2}
        sx={{
          borderTop: 1,
          borderColor: "grey.500",
          backgroundColor: "#0b2447",
          py: 8,
        }}>
        <Grid item sx={{ ml: 6 }} xs={12} md={5}>
          <Typography variant="h2" className="common-font">
            <span className="text-danger">POWER &</span>{" "}
            <span className="text-light">BEAUTY</span>
          </Typography>
          <Typography className="text-light" sx={{ pt: 2 }}>
            Free Library’s $1M auto archives are moving to Philly’s world-famous
            car museum and to a Hershey attraction
          </Typography>
          <Typography>
            <Link to="/allProducts">
              <Button
                variant="contained"
                sx={{ mt: 3, px: 6, py: 2 }}
                className="bg-danger common-font">
                Discover
              </Button>
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <img
            style={{ maxWidth: "400px" }}
            alt="img"
            src="https://i.ibb.co/3rHhQFf/1-2-car-png-picture.png"></img>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
