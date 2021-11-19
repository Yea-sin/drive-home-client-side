import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

import ManageProduct from "../ManageProduct/ManageProduct";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://glacial-beach-45386.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Container sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Manage All <span className="text-danger">Cars</span>
      </Typography>
      <DirectionsCarIcon sx={{ fontSize: "150px" }} />
      <Grid container spacing={2}>
        {products.map((product) => (
          <ManageProduct
            key={product._id}
            setProducts={setProducts}
            products={products}
            product={product}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default ManageProducts;
