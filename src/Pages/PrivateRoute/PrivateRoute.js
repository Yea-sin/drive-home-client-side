import { CircularProgress } from "@mui/material";
import React from "react";
import { Redirect } from "react-router";
import { Route } from "react-router";
import useAuth from "../../Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading === true) {
    return <CircularProgress />;
  }
  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          user?.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}></Redirect>
          )
        }
      />
    </div>
  );
};

export default PrivateRoute;
