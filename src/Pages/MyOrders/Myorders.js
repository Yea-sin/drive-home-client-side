import React, { useEffect, useState } from "react";
import { Container, Typography, Button } from "@mui/material";
import useAuth from "../../Hooks/useAuth";
import { Box } from "@mui/system";

const Myorders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Deleted Successfully");
          const remainingServices = orders.filter((order) => order._id !== id);
          setOrders(remainingServices);
        }
      });
  };

  return (
    <Container sx={{ p: 6 }}>
      <Typography variant="h3" sx={{ mb: 4 }}>
        My <span className="text-danger">Orders</span>
      </Typography>
      {orders.map((order) => (
        <Box key={order._id}>
          <Box sx={{ my: 4 }}>
            <Typography variant="h5">{order.order.title}</Typography>
            <div>
              <img width="150px" src={order.order.img} alt="" />
            </div>
            <Button
              onClick={() => handleDelete(order._id)}
              variant="contained"
              sx={{ px: 6, py: 1 }}
              className="bg-danger common-font">
              Cancle Order
            </Button>
          </Box>
        </Box>
      ))}
    </Container>
  );
};

export default Myorders;
