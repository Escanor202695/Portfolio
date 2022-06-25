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
    <div className="w-100 flex flex-col justify-center items-center border-2 py-16">
      <div
        className="title relative text-4xl font-semibold align-center md:mb-20"
        data-aos="zoom-in-right"
        data-aos-duration="500"
        data-aos-once="true"
      >
        Works
      </div>
      <Swiper
        data-aos="zoom-in"
        data-aos-duration="750"
        data-aos-once="true"
        data-aos-delay="300"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        // navigation={true}
        autoplay={{
          delay: 1500,
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
          <a
            href="https://amado-ecommerce.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/amado.png" layout="fill" alt="Image" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://burgerzilla.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/jevelin.png" layout="fill" alt="Image" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://razor-clone-007.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/razer.png" layout="fill" alt="Image" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://lawncare007.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/lawncare.png" layout="fill" alt="Image" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://disney-plus-clone007.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/disney.png" layout="fill" alt="Image" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Work;
