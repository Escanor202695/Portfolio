import React from "react";

function service({ title }) {
  return (
    <div
      className="service w-100 text-xl text-white border-2 border-theme bg-[rgba(0,0,0,.5)] p-4 cursor-pointer rounded-md shadow-md"
      style={{backdropFilter:"blur(4px)"}}
      data-aos="zoom-in-right"
      data-aos-duration="500"
      data-aos-once="true"
    >
      {title}
    </div>
  );
}

export default service;
