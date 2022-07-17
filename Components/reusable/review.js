import React from "react";
import Img from "./Img";
import { StarIcon } from "@heroicons/react/solid";

function review({ name, review }) {
  return (
    <div
      data-aos="zoom-in-right"
      data-aos-duration="750"
      data-aos-once="true"
      className="relative w-100 h-[20.75rem] md:h-[19.5vw] m-0 pb-[3.5rem] p-7 display flex flex-col
        md:px-[5vw] items-center rounded-md shadow-md bg-gradient-to-tr to-[#62ddd7] from-[#111414]"
    >
      <div className="w-full h-full absolute left-0 top-0 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,.4)] rounded-md"></div>
      <div
        className="absolute bottom-0 left-1/2 border-[.2rem] border-white rounded-full -translate-x-1/2
       translate-y-1/2 flex flex-col items-center"
      >
        <Img
          src="/profile.jpeg"
          classes="relative w-[5rem] h-[5rem] md:w-[5vw] md:h-[5vw] rounded-full overflow-hidden"
        />
      </div>
      <Img
        src="/quotation.png"
        classes="relative w-[8rem] h-[8rem] md:w-[7vw] md:h-[7vw] opacity-70"
      />

      <div
        className="italic text-[#e9e9e9] md:text-[1.25vw] text-sm -mt-10 z-10
       drop-shadow-xl shadow-black md:leading-[1.5vw]"
      >
        Sakib is the best developer in the world his sheer skill is necessary to
        humankind that no one can denny.
      </div>
      <div className="flex mt-5 z-[100]">
        <StarIcon className="h-5 w-5 md:w-[1.5vw] md:h-[1.5vw] text-theme" />
        <StarIcon className="h-5 w-5 md:w-[1.5vw] md:h-[1.5vw] text-theme" />
        <StarIcon className="h-5 w-5 md:w-[1.5vw] md:h-[1.5vw] text-theme" />
        <StarIcon className="h-5 w-5 md:w-[1.5vw] md:h-[1.5vw] text-theme" />
        <StarIcon className="h-5 w-5 md:w-[1.5vw] md:h-[1.5vw] text-theme" />
      </div>
      <div className="font-bold mt-2 md:text-[1.25vw] text-[#e9e9e9] z-[100]">
        Sakib Chowdhury
      </div>
    </div>
  );
}

export default review;
