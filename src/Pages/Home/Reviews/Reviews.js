import React, { useEffect, useState } from "react";
import "./Reviews.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Container, Typography } from "@mui/material";

import SwiperCore, { Pagination, Navigation } from "swiper";

import Slider from "react-slick";
import Review from "../../Review/Review";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
SwiperCore.use([Pagination, Navigation]);

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://glacial-beach-45386.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container sx={{ mb: 6 }}>
      <Typography component="div" sx={{ fontFamily: "Monospace" }}>
        <Typography variant="h4">
          Customer <span className="text-danger">Feedback</span>
        </Typography>
        <Typography sx={{ fontFamily: "Monospace" }} variant="h2">
          <span>{">"}</span>
        </Typography>
      </Typography>
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          {reviews.map((feedback) => (
            <Review key={feedback._id} feedback={feedback} />
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default Reviews;
