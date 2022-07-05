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
    src: "/amado.png",
    link: "https://amado-ecommerce.netlify.app",
  },
  {
    src: "/jevelin.png",
    link: "https://burgerzilla.netlify.app",
  },
  {
    src: "/razer.png",
    link: "https://razor-clone-007.netlify.app",
  },
  {
    src: "/lawncare.png",
    link: "https://lawncare007.netlify.app",
  },
  {
    src: "/disney.png",
    link: "https://disney-plus-clone007.netlify.app",
  },
];

const Work = () => {
  return (
    <div
      id="work"
      className=" w-100 flex flex-col justify-center items-center py-12"
    >
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
                  priority
                  blurDataURL="/disney.png"
                  placeholder="blur"
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
