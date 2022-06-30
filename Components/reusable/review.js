import React from "react";
import Img from "./Img";
import { StarIcon } from "@heroicons/react/solid";

function review({ name = "Sakib Chowdhury", position="start", review }) {
  const bgColor = (position == "start")?"#000":"#000`";

  return (
    <div
      className={`w-100 rounded-md flex justify-${position}`}
      data-aos={position=="start"?"zoom-in-right":"zoom-in-left"}
      data-aos-duration="750"
      data-aos-once="true"
    >
    <div className="triangle"></div>
      <div className={`w-5/6 bg-[${bgColor}] p-5 rounded-md flex-end`}>
        <div className="w-100 flex flex-row items-center space-x-2">
          <Img
            src="/profile.jpeg"
            classes="relative w-[3rem] h-[3rem] rounded-full overflow-hidden shadow-sm shadow-theme"
          />
          <div className="text-xl text-white">{name}</div>
        </div>
        <div className="flex mt-2">
          <StarIcon className="h-5 w-5 text-theme" />
          <StarIcon className="h-5 w-5 text-theme" />
          <StarIcon className="h-5 w-5 text-theme" />
          <StarIcon className="h-5 w-5 text-theme" />
          <StarIcon className="h-5 w-5 text-theme" />
        </div>
        <div className="text-sm text-white mt-2 italic">{`"${review}"`}</div>     
      </div>
    </div>
  );
}

export default review;
