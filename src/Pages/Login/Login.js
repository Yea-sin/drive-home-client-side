import { Button, Input, Typography } from "@mui/material";
import "./Login.css";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Box>
      <Typography sx={{ mt: 5 }} variant="h4">
        Please <span className="text-success">Login</span>
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", p: 8.5 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            sx={{ my: 3 }}
            placeholder="Enter Email"
            {...register("email")}
          />
          <Input
            placeholder="Enter Password"
            type="password"
            {...register("password")}
          />
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
    </Box>
  );
};

export default Login;
