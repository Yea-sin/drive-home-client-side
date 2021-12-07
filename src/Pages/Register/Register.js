import {
  Alert,
  Button,
  CircularProgress,
  Input,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const { registerUser, user, error, isLoading } = useAuth();
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;

    setLoginData(newLoginData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(loginData.email, loginData.password, history, loginData.name);
  };

  return (
    <Box>
      <Typography sx={{ mt: 5 }} variant="h4">
        Please <span className="text-danger">Register</span>
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", p: 8.5 }}>
        {!isLoading && (
          <form onSubmit={handleSubmit}>
            <Input
              sx={{ my: 3 }}
              placeholder="Enter Name"
              type="name"
              name="name"
              onBlur={handleOnBlur}
            />
            <Input
              sx={{ my: 3 }}
              placeholder="Enter Email"
              type="email"
              name="email"
              onBlur={handleOnBlur}
            />
            <Input
              placeholder="Enter Password"
              type="password"
              name="password"
              onBlur={handleOnBlur}
            />
            {user?.email && (
              <Alert severity="success">User Created Successfully!</Alert>
            )}
            {error && <Alert severity="error">{error}</Alert>}
            <Box sx={{ textAlign: "center", marginTop: "20px" }}>
              <NavLink to="/login">
                <Typography sx={{ color: "#000", mb: 4 }}>
                  Already have an account?
                </Typography>
              </NavLink>
              <Button variant="contained" sx={{ width: "200px" }} type="submit">
                Submit
              </Button>
            </Box>
          </form>
        )}
        {isLoading && <CircularProgress />}
      </Box>
    </Box>
  );
};

export default Register;
