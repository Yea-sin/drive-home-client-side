import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";

const ManageProduct = (props) => {
  const { setProducts, products, product } = props;
  const { title, img, _id } = product;
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Deleted Successfully");
          const remainingProducts = products.filter((food) => food._id !== id);
          setProducts(remainingProducts);
        }
      });
  };
  return (
    <Grid item xs={6} md={4}>
      <Paper elevation={3} sx={{ p: 6 }}>
        <Typography variant="h5">{title}</Typography>
        <div>
          <img src={img} width="100px" alt="" />
        </div>
        <Button
          onClick={() => handleDelete(_id)}
          variant="contained"
          sx={{ px: 6, py: 1 }}
          className="bg-danger common-font">
          Delete
        </Button>
      </Paper>
    </Grid>
  );
};

export default ManageProduct;
