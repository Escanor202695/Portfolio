import React from "react";
import Img from "./Img";
import { StarIcon } from "@heroicons/react/solid";

function review({ name, src, feedback }) {
  return (
    <div
      data-aos="zoom-in-right"
      data-aos-duration="750"
      data-aos-once="true"
      className="relative w-100 h-[19rem] md:h-[19.5vw] display flex flex-col justify-center md:px-[3vw] px-8
        items-center rounded-md shadow-md bg-gradient-to-tr to-[#62ddd7] from-[#111414]"
    >
      <div className="w-full h-full absolute left-0 top-0 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,.4)] rounded-md"></div>
      <div
        className="absolute bottom-0 left-1/2 border-[.2rem] border-white rounded-full -translate-x-1/2
       translate-y-1/2 flex flex-col items-center"
      >
        <Img
          src={src}
          classes="relative w-[5rem] h-[5rem] md:w-[5vw] md:h-[5vw] rounded-full overflow-hidden"
        />
      </div>
      <div className='absolute top-0 left-20 -translate-x-1/2 -translate-y-1/3'>
        <Img
          src="/quotation.png"
          classes="relative w-[5rem] h-[5rem] md:w-[8vw] md:h-[8vw] opacity-60"
        />
      </div>

      <div
        className="italic text-white md:text-[1.1vw] text-sm z-10
       drop-shadow-xl shadow-black md:leading-[1.5vw] text-center tracking-wide"
      >
        {`"${feedback}"`}
      </div>
      <div className="flex mt-5 z-[100]">
        <StarIcon className="h-5 w-5 md:w-[1.5vw] md:h-[1.5vw] text-theme" />
        <StarIcon className="h-5 w-5 md:w-[1.5vw] md:h-[1.5vw] text-theme" />
        <StarIcon className="h-5 w-5 md:w-[1.5vw] md:h-[1.5vw] text-theme" />
        <StarIcon className="h-5 w-5 md:w-[1.5vw] md:h-[1.5vw] text-theme" />
        <StarIcon className="h-5 w-5 md:w-[1.5vw] md:h-[1.5vw] text-theme" />
      </div>
      <div className="font-bold mt-2 md:text-[1.25vw] text-white z-[100]">
        {name}
      </div>
    </div>
  );
}

export default review;
