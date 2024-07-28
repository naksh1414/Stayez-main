// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';
import CaroImg from "../../assets/CarouselImage.png";
// import required modules
import { Autoplay, Pagination} from "swiper/modules";

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="w-[70%] md:w-[90%]" src={CaroImg} alt="Image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[70%] md:w-[90%]" src={CaroImg} alt="Image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[70%] md:w-[90%]" src={CaroImg} alt="Image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[70%] md:w-[90%]" src={CaroImg} alt="Image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[70%] md:w-[90%]" src={CaroImg} alt="Image" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[70%] md:w-[90%]" src={CaroImg} alt="Image" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
