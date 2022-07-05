import React from "react";
import Img from "../Components/reusable/Img";

function About() {
  return (
    <div className="about text-black w-100 px-10 py-16 flex flex-col justify-center items-center">
      <div
        className="title relative text-4xl font-semibold align-center mb-[3rem] md:mb-20"
        data-aos="zoom-in-right"
        data-aos-duration="750"
        data-aos-once="true"
      >
        About
      </div>
      <div
        className="w-full flex flex-row justify-items-start items-center"
        data-aos="zoom-in-right"
        data-aos-duration="750"
        data-aos-once="true"
      >
        <Img
          src="/profile.jpeg" 
          classes="relative w-[16vw] h-[16vw] mr-2 rounded-full overflow-hidden"
        />
        <p className="text-[7vw] text-theme w-[65vw] sm:w-6/7">
          Do something awesome with me!
        </p>
      </div>
      <p
        className="text-lg mt-5"
        data-aos="zoom-in-right"
        data-aos-duration="750"
        data-aos-once="true"
      >
        Been working as a frontend developer for almost 2.5+ years, aiming to
        build highly scalable, efficient, well-documented websites so that it is
        easy to maintain. I love new ideas and am ready to accept challenges.
      </p>
    </div>
  );
}

export default About;
