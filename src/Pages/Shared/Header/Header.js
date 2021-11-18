import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{ backgroundColor: "#0B2447" }}
        sx={{ pb: 2 }}
        position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/">
              <span className="text-light">Drive-</span>
              <span className="text-danger">Home</span>
            </NavLink>
          </Typography>
          <NavLink to="/home">
            <Button sx={{ color: "white" }}>Home</Button>
          </NavLink>
          <NavLink to="/allProducts">
            <Button sx={{ color: "white" }}>Discover</Button>
          </NavLink>
          {user?.email ? (
            <div>
              <Button onClick={logOut} sx={{ color: "#DC3545" }}>
                Logout
              </Button>
            </div>
          ) : (
            <div>
              <NavLink to="/login">
                <Button sx={{ color: "#DC3545" }}>Login</Button>
              </NavLink>
              <NavLink to="/register">
                <Button sx={{ color: "#DC3545" }}>Sing Up</Button>
              </NavLink>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
