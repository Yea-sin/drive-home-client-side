import { Button, Container, Grid, Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router";

const Purchase = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const { purchaseId } = useParams();

  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `https://glacial-beach-45386.herokuapp.com/products/${purchaseId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  // console.log(product);
  let orderedProduct = product;
  const onSubmit = (data) => {
    data.order = orderedProduct;
    console.log(data.order);
    axios
      .post("https://glacial-beach-45386.herokuapp.com/orders", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Successfully Submitted");
          reset();
        }
      });
  };

  return (
    <>
      <Container>
        <Grid container spacing={2} sx={{ my: 10 }}>
          <Grid item xs={12} sm={12} md={5}>
            <h3 className="text-warning mb-5">{product.title}</h3>
            <img src={product.img} style={{ maxWidth: "300px" }} alt="" />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={7}
            sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Your <span className="text-danger">Purchase</span> Details
              </Typography>
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
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Purchase;
