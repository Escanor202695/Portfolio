import React from "react";

function service({ title }) {
  return (
    <div
      className="service w-100 text-xl border-2 border-theme bg-white p-4 cursor-pointer rounded-md shadow-md"
      data-aos="zoom-in-right"
      data-aos-duration="500"
      data-aos-once="true"
    >
      {title}
    </div>
  );
}

export default service;
