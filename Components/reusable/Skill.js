import React from "react";

function Skill({ title, score }) {
  return (
    <div
      className="w-full mb-5 md:mb-[1.5vw] px-5 text-white z-[100]"
      data-aos="zoom-in-right"
      data-aos-duration="750"
      data-aos-once="true"
    >
      <div className="text-lg md:text-[1.5vw] mb-[.25rem] md:mb-[.6vw] drop-shadow-md">{title}</div>
      <div className="w-full h-[.3rem] md:h-[.5rem] relative bg-white rounded-full overflow-hidden drop-shadow-md">
        <div
          className="score absolute h-[5rem] top-0 left-0 bg-theme"
          style={{ width: `${score}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Skill;
