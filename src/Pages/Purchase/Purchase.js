import { Button, Container, Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";

const Purchase = () => {
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <div className="row justify-content-center">
        <div className="col-md-5 mt-5">
          <h3 className="text-warning mb-5">hizz</h3>
          <img src="" style={{ maxWidth: "300px" }} alt="" />
        </div>
        <div className="order-form border border-2 p-5 col-md-7 my-5">
          <h5 className="mb-4">
            Your <span className="text-danger">Purchase</span> Details
          </h5>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              sx={{ my: 3 }}
              defaultValue={user.displayName}
              placeholder="Enter Name"
              {...register("name")}
              type="name"
              name="name"
            />
            <Input
              sx={{ my: 3 }}
              defaultValue={user.email}
              placeholder="Enter Email"
              {...register("email")}
              type="email"
              name="email"
            />
            <Input
              sx={{ my: 3 }}
              placeholder="Address"
              {...register("address")}
              type="adress"
              name="address"
            />
            <Input
              sx={{ my: 3 }}
              placeholder="Phone Number"
              {...register("number")}
              type="number"
              name="number"
            />

            <Button variant="contained" sx={{ width: "200px" }} type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Purchase;
