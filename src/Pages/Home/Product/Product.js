import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { title, img, description, price } = product;

  return (
    <Grid item sx={{ p: 6 }} xs={2} sm={2} md={4}>
      <Card sx={{ maxWidth: 345, border: 0 }}>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent sx={{ textAlign: "left" }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="h5" sx={{ color: "green" }}>
            ${price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="/purchase">
            <Button
              variant="contained"
              sx={{ px: 6, py: 1 }}
              className="bg-danger common-font">
              Purchase
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
