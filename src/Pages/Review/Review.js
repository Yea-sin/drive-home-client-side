import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Review = ({ feedback }) => {
  return (
    <div>
      <Paper elevation={3} sx={{ p: 8, width: "100%" }}>
        <Typography>{feedback.review.slice(0, 50)}</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
          }}>
          <Typography>
            <img
              style={{ borderRadius: "50%" }}
              width="100px"
              src={feedback.img}
              alt=""
            />
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#E22937", ml: 2, fontFamily: "monospace" }}>
            {feedback.name}
          </Typography>
        </Box>
      </Paper>
    </div>
  );
};

export default Review;
