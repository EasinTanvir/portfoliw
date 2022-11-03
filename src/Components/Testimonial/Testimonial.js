import React from "react";
import "./Testmonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../assests/img/profile5.jpg";
import profilePic2 from "../../assests/img/profile1.jpg";
import profilePic3 from "../../assests/img/profile2.jpg";
import profilePic4 from "../../assests/img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "EasinTanvir is an overall solid developer. He played a large part in helping my project come to life. What he says he can deliver - he can definitely deliver!",
    },
    {
      img: profilePic2,
      review:
        "Great developer! I have an ongoing and very involved project with EasinTanvir and he is doing terrific work!",
    },
    {
      img: profilePic3,
      review:
        "Great experience! We became an amazing team for this big project! Very responsive, very professional and very fast!",
    },
    {
      img: profilePic4,
      review:
        "Best developer I have been working with, a great person and very professional.",
    },
  ];

  return (
    <div id="about" className="t-wrapper">
      <div className="t-heading">
        <span>Client always get</span>
        <span> Exceptional work</span>
        <span> from me..</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="testimonial">
              <img src={item.img} alt="" />
              <span>{item.review}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
