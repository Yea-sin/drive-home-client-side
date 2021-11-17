import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box className="footer p-5 bg-dark text-light">
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">&copy;all rights are reserved</Typography>
          <Box sx={{ display: "flex" }} className="icons">
            <NavLink style={{ color: "#4064AC" }} to="/facebook">
              <Typography variant="">
                <FacebookIcon />
              </Typography>
            </NavLink>
            <NavLink style={{ color: "#b12704" }} to="/instagram">
              <Typography variant="">
                <InstagramIcon />
              </Typography>
            </NavLink>
            <NavLink style={{ color: "#1C9CEA" }} to="/twitter">
              <Typography variant="">
                <TwitterIcon />
              </Typography>
            </NavLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
