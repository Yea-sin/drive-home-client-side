import { Button, Container, Input, Typography } from "@mui/material";
import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://glacial-beach-45386.herokuapp.com/reviews", data)
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
        Add <span className="text-danger">Rviews</span>
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
            placeholder="Your Name"
            {...register("name")}
            type="name"
          />
          <Input
            sx={{ my: 3 }}
            placeholder="Image URL"
            {...register("img")}
            type="text"
          />
          <Input
            sx={{ my: 3 }}
            placeholder="Your Review"
            {...register("review")}
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

export default AddReview;
