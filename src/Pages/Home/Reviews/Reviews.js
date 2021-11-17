import { Container, Typography } from "@mui/material";
import "./Reviews.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { borderRadius, Box } from "@mui/system";
SwiperCore.use([Pagination, Navigation]);

const Reviews = () => {
  const customer = {
    name: "David Morgan",
    img: "https://i.ibb.co/swghBfK/6.jpg",
    review:
      "There are no small moments, in some ways, because every single one of these moments is amplified right now. It’s all about setting expectations and then delivering on those smaller promises throughout the journey.",
  };
  return (
    <Container>
      <Typography component="div" sx={{ fontFamily: "Monospace" }}>
        <Typography variant="h4">
          Customer <span className="text-danger">Feedback</span>
        </Typography>
        <Typography sx={{ fontFamily: "Monospace" }} variant="h2">
          ''
        </Typography>
      </Typography>
      <Swiper
        slidesPerView="auto"
        centeredSlides={true}
        grabCursor={true}
        spaceBetween={40}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper">
        <SwiperSlide>
          <Box>
            <Typography>{customer.review}</Typography>
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
                  src={customer.img}
                  alt=""
                />
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#E22937", ml: 2, fontFamily: "monospace" }}>
                {customer.name}
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <Typography>{customer.review}</Typography>
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
                  src={customer.img}
                  alt=""
                />
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#E22937", ml: 2, fontFamily: "monospace" }}>
                {customer.name}
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <Typography>{customer.review}</Typography>
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
                  src={customer.img}
                  alt=""
                />
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#E22937", ml: 2, fontFamily: "monospace" }}>
                {customer.name}
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <Typography>{customer.review}</Typography>
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
                  src={customer.img}
                  alt=""
                />
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#E22937", ml: 2, fontFamily: "monospace" }}>
                {customer.name}
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Reviews;
