import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import AllProduct from "../AllProduct/AllProduct";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://glacial-beach-45386.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <Container sx={{ flexGrow: 1, my: 5, width: "100%" }}>
        <Typography component="div" sx={{ my: 5, fontFamily: "Monospace" }}>
          <Typography variant="h4">
            Buy Your Dream <span className="text-danger">Car</span>
          </Typography>
          <Typography sx={{ fontFamily: "Monospace" }} variant="h1">
            ''
          </Typography>
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 1, sm: 4, md: 12 }}>
          {products.map((product) => (
            <AllProduct key={product._id} product={product} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default AllProducts;
