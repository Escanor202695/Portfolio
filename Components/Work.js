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

const work = [
  {
    src: "/crantech.png",
    link: "https://crantechllc.com",
  },
  {
    src: "/software-district.png",
    link: "https://software-district.netlify.app/",
  },
  // {
  //   src: "/smith-av.png",
  //   link: "https://smithav.com/home/",
  // },
  {
    src: "/amado.webp",
    link: "https://amado-ecommerce.netlify.app",
  },
  {
    src: "/jevelin.webp",
    link: "https://burgerzilla.netlify.app",
  },
  {
    src: "/lawncare.webp",
    link: "https://lawncare007.netlify.app",
  },
];

const Work = () => {
  return (
    <div
      id="work"
      className="works w-100 flex flex-col justify-center items-center py-[4rem] md:py-[6vw]"
    >
      <div
        className="title relative text-4xl md:text-5xl 2xl:text-7xl font-semibold align-center md:mb-[6vw]
        drop-shadow-md"
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
        navigation={true}
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
        {work.map((w, key) => {
          return (
            <SwiperSlide key={key}>
              <a href={w.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={w.src}
                  layout="fill"
                  alt="Image"
                  className="md:rounded-md"
                  loading="lazy"
                />
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Work;
