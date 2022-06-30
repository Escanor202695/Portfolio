import React from "react";

function Skill({ title, score }) {
  return (
    <div
      className="w-screen my-3 px-10 text-white z-[100]"
      data-aos="zoom-in-right"
      data-aos-duration="750"
      data-aos-once="true"
    >
      <div className="text-xl mb-1">{title}</div>
      <div className="w-full h-[.5rem] relative bg-white rounded-full overflow-hidden">
        <div
          className="score absolute h-full top-0 left-0 bg-theme rounded-full"
          style={{ width: `${score}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Skill;
