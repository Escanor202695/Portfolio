import React,{useState,useEffect} from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Keyboard,
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper";

const ClientSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const swiperParams = {
    spaceBetween: 30,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    loop: true,
    speed: 2000,
  };

  const clients = [
    // Add your client logos here
    "/clients/1.png",
    "/clients/2.png",
    "/clients/3.png",
    "/clients/4.png",
    "/clients/5.png",
    "/clients/6.png",
    "/clients/7.png",
  ];

  const grayscaleStyle = {
    filter: "grayscale(100%)",
  };

  return (
    <div className="mx-auto py-10 bg-slate-100">
      <Swiper
        {...swiperParams}
        modules={[Keyboard, Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="max-w-[1140px] 2xl:max-w-[1320px]"
        breakpoints={{
          640: {
            slidesPerView: 2 // 1 slide per view on screens less than 640px wide (mobile)
          },
          768: {
            slidesPerView: 3, // 3 slides per view on screens between 640px and 768px wide (medium screens)
          },
          1140: {
            slidesPerView: 5, // 5 slides per view on screens between 768px and 1024px wide (large screens)
          },
        }}
      >
        {isClient && clients.map((client, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center h-full"
          >
            <img
              src={`${client}`}
              alt={`Client ${index + 1}`}
              className="mx-auto h-[100px] 2xl:h-[120px] w-auto object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientSection;
