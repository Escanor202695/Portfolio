import React from "react";
import Img from "./Img";
import { StarIcon } from "@heroicons/react/solid";

function review({ name, review }) {
  return (
      <div
        data-aos="zoom-in-right"
        data-aos-duration="750"
        data-aos-once="true"
        className="relative w-100 h-100 m-0 pb-[3.5rem] bg-[#dafdda] p-7 display flex flex-col
        items-center rounded-md shadow-md"
      >
        <div className="absolute bottom-0 left-1/2 border-4 border-white rounded-full -translate-x-1/2 translate-y-1/2 flex flex-col items-center">
          <Img
            src="/profile.jpeg"
            classes="relative w-[5rem] h-[5rem] rounded-full overflow-hidden"
          />
        </div>
        <Img src="/quotation.png" classes="relative w-[8rem] h-[8rem] opacity-80" />

        <div className="italic text-gray-700">
          Sakib is the best developer in the world his sheer skill is necessary
          to humankind that no one can denny.
        </div>
        <div className="flex mt-5">
          <StarIcon className="h-5 w-5 text-theme" />
          <StarIcon className="h-5 w-5 text-theme" />
          <StarIcon className="h-5 w-5 text-theme" />
          <StarIcon className="h-5 w-5 text-theme" />
          <StarIcon className="h-5 w-5 text-theme" />
        </div>
        <div className="font-bold mt-2">Sakib Chowdhury</div>
      </div>
  );
}

export default review;
