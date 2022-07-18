import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/bundle";
import Review from "../Components/reusable/review";
import Img from "../Components/reusable/Img";
import {
  Keyboard,
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper";

const feedbacks = [
  {
    src: "/1.jpeg",
    name: "Be Kind",
    feedback:
      "Fantastic work by Sakib. He delivered a great portfolio website within 1 day. Will definitely work with him again!",
  },
  {
    src: "/2.jpeg",
    name: "Jordi Garreta",
    feedback:
      "Quick understanding the tasks, and quick and effective completing them",
  },
  {
    src: "/3.jpeg",
    name: "Sharmad Hadi",
    feedback:
      "Sakib is a excellent dev, who works fast and has great skills. Needed a small page done, and the work he did was awesome. Would definately hire again, and he is one hundred percent recommended!",
  },
];

function Reviews(props) {
  return (
    <div
      className="feedbacks relative w-100 md:h-[50vw] flex flex-col justify-center 
    items-center py-[4rem] pb-[3.5rem] md:pt-[3vw] md:pb-[3vw]"
    >
      <div
        className="title relative text-black text-4xl md:text-5xl 2xl:text-7xl font-semibold
         align-center md:mb-[5vw] drop-shadow-md shadow-black"
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
        {feedbacks.map((f, key) => {
          return (
            <SwiperSlide key={key}>
              <Review name={f.name} src={f.src} feedback={f.feedback} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Reviews;
