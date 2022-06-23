import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/bundle";
import {
  Keyboard,
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper";

const Work = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        // navigation={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          slideShadows: true,
        }}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src="/logo.png" layout="fill" alt="Image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/logo.png" layout="fill" alt="Image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/logo.png" layout="fill" alt="Image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/logo.png" layout="fill" alt="Image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/logo.png" layout="fill" alt="Image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/logo.png" layout="fill" alt="Image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/logo.png" layout="fill" alt="Image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/logo.png" layout="fill" alt="Image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/logo.png" layout="fill" alt="Image" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Work;
