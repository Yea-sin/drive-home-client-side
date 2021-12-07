import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Alert, Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });
    e.preventDefault();
  };
  return (
    <Container sx={{ p: 10, textAlign: "center" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Make an Admin
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={handleSubmit}>
          <TextField
            sx={{ py: 5 }}
            onBlur={handleBlur}
            type="email"
            placeholder="Email"
            variant="outlined"
          />
          <Button type="submit" variant="contained">
            Make Admin
          </Button>
        </form>
      </Box>
      {success && <Alert severity="success">Make Admin Successfully!</Alert>}
    </Container>
  );
};

export default MakeAdmin;
