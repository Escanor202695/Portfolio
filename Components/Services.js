import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/bundle";
import Service from "../Components/reusable/service";
import Img from "../Components/reusable/Img";

const Services = () => {
  return (
    <div
      id="service"
      className="services relative w-100 flex flex-col justify-center items-center py-[4rem] md:py-[6vw] bg-gradient-to-tr
       to-[#62ddd7] from-[#111414]"
    >
      <div className="absolute h-full w-full top-0 left-0">
        <Img src="/abstractlarge.webp" classes="hidden md:flex relative w-full h-full" />
        <Img src="/abstractbgmobile.webp" classes="md:hidden relative w-full h-full z-[100]"/>
      </div>
    
      <div
        className="w-[100vw] h-full absolute top-0 left-0 bg-gradient-to-r 
      from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,.4)]"
      ></div>
      <div
        className="title relative text-white text-4xl md:text-5xl 2xl:text-7xl font-semibold align-center mb-[4vw]"
        data-aos="zoom-in-right"
        data-aos-duration="500"
        data-aos-once="true"
      >
        Services
      </div>

      <div className="flex items-center justify-center w-4/5 flex-wrap md:mt-0 mt-10 flex-col md:flex-row">
        <Service index={0} />
        <Service index={1} />
        <Service index={2} />
        <Service index={3} />
        <Service index={4} />
        <Service index={5} />
      </div>
    </div>
  );
};

export default Services;
