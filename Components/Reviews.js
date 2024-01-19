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
    src: "/jp.png",
    name: "JP Lansink",
    feedback: `He truly went above and beyond to
       deliver an outstanding website for my business. Sakib's attention to detail and coding skills were impressive.
         The end result was absolutely fantastic! I highly recommend Sakib for his professionalism, expertise,
          and dedication to client satisfaction.`,
  },
  {
    src: "/varnit.png",
    name: "Varnit Garg",
    feedback: `I had a great experience with Sakib. Super quick, delivered quality work on time, and even went the extra mile to sort out issues. Definitely recommend and would work with him again!`,
  },
  {
    src: "/jafir.png",
    name: "Muktadirul Islam",
    feedback:
      "If you are looking for prompt support and smart compliance with your guidance, I believe you can get it here. My wishes are for the team for their future endeavors!",
  },
  {
    name: "Matteo",
    feedback:
      `Outstanding web developer! Your attention to detail and coding skills are top-notch. Thanks to your expertise, our website now runs smoothly and looks fantastic. Keep up the great work!`,
  },
  {
    name: "Norah F.",
    feedback:
      `I had the pleasure of working with Mr. Sakib and his performance has been nothing short of exceptional.
      He exhibits a deep understanding of web development and consistently delivers high-quality and well-structured website.`,
  },
  {
    name: "Bikash Singh",
    feedback:
      `Sakib delivered good work on this web design project and I enjoyed working with him. His communication was top-notch, he met all deadlines, and his skills were reasonably strong. I enjoyed working with Sakib and will likely have additional jobs for him in the future.`,
  },
  {
    name: "Jordi Garreta",
    feedback:
      "Quick understanding the tasks, and quick and effective completing them",
  },
  {
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
