import React from "react";
import "./portfoliw.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { ModeContext } from "../../Store/ContextApi";
const Portfoliw = () => {
  const { state } = ModeContext();
  const { darkMode } = state;
  return (
    <div id="Portfoliw" className="portfoliw">
      <span style={darkMode ? { color: "white" } : { color: "" }}>
        Recent Projects
      </span>
      <span>Portfoliw</span>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfoliw-slider"
      >
        <SwiperSlide>
          <a href="https://proshop-9578c.firebaseapp.com">
            <img src="/ea.png" alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://nextjs-course-seven-flame.vercel.app">
            <img src={"/test2.png"} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://realblog-application.firebaseapp.com/">
            <img src="/vl.png" alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://ecommerces-o2g5.vercel.app">
            <img src={"/checks.png"} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://completecrud.vercel.app">
            <img src={"/crud.png"} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://restaurants-three.vercel.app">
            <img src={"/rest.png"} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfoliw;
