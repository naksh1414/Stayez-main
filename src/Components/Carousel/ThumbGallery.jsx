import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import flatImage from "../../assets/specificCard.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// Import required modules
import { FreeMode, Thumbs } from "swiper/modules";

export default function ThumbGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10} 
        // navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img className="w-[250px] md:w-full" src={flatImage} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[250px] md:w-full" src={flatImage} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[250px] md:w-full" src={flatImage} alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[250px] md:w-full" src={flatImage} alt="Slide 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[250px] md:w-full" src={flatImage} alt="Slide 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[250px] md:w-full" src={flatImage} alt="Slide 6" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[250px] md:w-full" src={flatImage} alt="Slide 7" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[250px] md:w-full" src={flatImage} alt="Slide 8" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1440: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
          2560: {
            slidesPerView: 8,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide>
          <img className="w-[250px] md:w-full" src={flatImage} alt="Thumb 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[250px] md:w-full" src={flatImage} alt="Thumb 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[250px] md:w-full" src={flatImage} alt="Thumb 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[250px] md:w-full" src={flatImage} alt="Thumb 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[250px] md:w-full" src={flatImage} alt="Thumb 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[250px] md:w-full" src={flatImage} alt="Thumb 6" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[250px] md:w-full" src={flatImage} alt="Thumb 7" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[250px] md:w-full" src={flatImage} alt="Thumb 8" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
