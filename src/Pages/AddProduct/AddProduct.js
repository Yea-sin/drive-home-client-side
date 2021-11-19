import { Button, Container, Input, Typography } from "@mui/material";
import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://glacial-beach-45386.herokuapp.com/products", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
      });
  };
  return (
    <div>
      <Typography variant="h4" sx={{ my: 3 }}>
        Add <span className="text-danger">Product</span>
      </Typography>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          my: 3,
        }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            sx={{ my: 3 }}
            placeholder="Car Name"
            {...register("name")}
            type="name"
          />
          <Input
            sx={{ my: 3 }}
            placeholder="Car Price"
            {...register("price")}
            type="number"
          />
          <Input
            sx={{ my: 3 }}
            placeholder="Car Description"
            {...register("description")}
            type="text"
          />
          <Input
            sx={{ my: 3 }}
            placeholder="Image URL"
            {...register("img")}
            type="text"
          />

          <Button variant="contained" sx={{ width: "200px" }} type="submit">
            Add
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default AddProduct;
