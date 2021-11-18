import { Alert, Button, Input, Typography } from "@mui/material";
import "./Login.css";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { singInUsingGoogle, user, logOut, loginUser, error } = useAuth();
  console.log(error);
  const [loginData, setLoginData] = useState([]);
  const location = useLocation();
  const history = useHistory();
  const redirect = location.state?.from || "/";
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(loginData.email, loginData.password, location, history);
  };

  const handleLogIn = () => {
    singInUsingGoogle().then((result) => {
      history.push(redirect);
    });
  };
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    console.log(newLoginData);

    setLoginData(newLoginData);
  };

  return (
    <Box>
      <Typography sx={{ mt: 5 }} variant="h4">
        {user?.email ? (
          <div>
            Welcome <span className="text-success">{user.email}</span>
          </div>
        ) : (
          <div>
            Please <span className="text-success">Login</span>
          </div>
        )}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
        <form onSubmit={handleSubmit}>
          <Input
            sx={{ my: 3 }}
            placeholder="Enter Email"
            name="email"
            onBlur={handleOnChange}
          />
          <Input
            placeholder="Enter Password"
            type="password"
            name="password"
            onBlur={handleOnChange}
          />
          {user?.email && (
            <Alert severity="success">Logged In Successfully!</Alert>
          )}
          {error && <Alert severity="error">{error}</Alert>}
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <NavLink to="/register">
              <Typography sx={{ color: "#000", mb: 4 }}>
                Don't have an account?
              </Typography>
            </NavLink>
            <Button variant="contained" sx={{ width: "200px" }} type="submit">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
      <p>--------------------OR------------------</p>

      {user?.email ? (
        <Box sx={{ my: 2 }}>
          <Button
            onClick={logOut}
            variant="contained"
            sx={{ py: 2 }}
            type="submit">
            Sing Out
          </Button>
        </Box>
      ) : (
        <Box sx={{ my: 2 }}>
          <Button
            onClick={handleLogIn}
            variant="contained"
            sx={{ py: 2 }}
            type="submit">
            Sing In Using Google
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Login;
