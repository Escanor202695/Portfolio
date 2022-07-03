import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/bundle";
import Service from "../Components/reusable/service";
import Img from "../Components/reusable/Img";
import { PlusCircleIcon } from "@heroicons/react/outline";
import {
  Keyboard,
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper";

const services = [
  {
    title: "Landing page design",
    description: "I can create high perform for your business",
  },
  {
    title: "Landing page design",
    description: "I can create high perform for your business",
  },
  {
    title: "Landing page design",
    description: "I can create high perform for your business",
  },
  {
    title: "Landing page design",
    description: "I can create high perform for your business",
  },
  {
    title: "Landing page design",
    description: "I can create high perform for your business",
  },
  {
    title: "Landing page design",
    description: "I can create high perform for your business",
  },
  {
    title: "Landing page design",
    description: "I can create high perform for your business",
  },
];

const Services = () => {
  return (
    <div
      id="service"
      className="relative w-100 flex flex-col justify-center items-center py-16"
    >
      <Img src="/skill-bg.jpg" />
      <div className="w-[100vw] h-full absolute bg-gradient-to-b from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,.3)]"></div>

      <div
        className="title relative text-white text-4xl font-semibold align-center mb-6"
        data-aos="zoom-in-right"
        data-aos-duration="500"
        data-aos-once="true"
      >
        Services
      </div>
      <div className="md:hidden mt-10 services flex flex-col w-4/5 space-y-2">
        <Service title="Landing page design" />
        <Service title="UI/UX design" />
        <Service title="Frontend development" />
        <Service title="Bug Fixing" />
        <Service title="Responsive design" />
        <Service title="Portfolio design" />
        <Service title="Email template design" />
        <Service title="Adding animation" />
      </div>
    </div>
  );
};

export default Services;
