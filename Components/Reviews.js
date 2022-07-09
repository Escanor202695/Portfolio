import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/bundle";
import Review from "../Components/reusable/review";
import {
  Keyboard,
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper";

const feedbacks = [
  {
    src: "/profile.jpeg",
    name: "Sakib Chowdhury",
    feedback:
      "Sakib is the best developer in the world willin to work with him a",
  },
  {
    src: "/profile.jpeg",
    name: "Sakib Chowdhury",
    feedback:
      "Sakib is the best developer in the world willin to work with him a",
  },
  {
    src: "/profile.jpeg",
    name: "Sakib Chowdhury",
    feedback:
      "Sakib is the best developer in the world willin to work with him a",
  },
  {
    src: "/profile.jpeg",
    name: "Sakib Chowdhury",
    feedback:
      "Sakib is the best developer in the world willin to work with him a",
  },
  {
    src: "/profile.jpeg",
    name: "Sakib Chowdhury",
    feedback:
      "Sakib is the best developer in the world willin to work with him a",
  },
  {
    src: "/profile.jpeg",
    name: "Sakib Chowdhury",
    feedback:
      "Sakib is the best developer in the world willin to work with him a",
  },
  {
    src: "/profile.jpeg",
    name: "Sakib Chowdhury",
    feedback:
      "Sakib is the best developer in the world willin to work with him a",
  },
];

function Reviews(props) {
  return (
    <div className="feedbacks relative w-100 flex flex-col justify-center items-center pt-[4rem] pb-[3rem]">
      <div
        className="title relative text-black text-4xl font-semibold align-center md:mb-20"
        data-aos="zoom-in-right"
        data-aos-duration="500"
        data-aos-once="true"
      >
        Feedbacks
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
        id="review"
        className="reviewSlide"
        modules={[Keyboard, Autoplay, EffectCoverflow, Pagination, Navigation]}
      >
        {feedbacks.map((w, key) => {
          return (
            <SwiperSlide key={key}>
              <Review />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Reviews;
