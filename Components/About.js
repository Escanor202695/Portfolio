import React from "react";
import Img from "../Components/reusable/Img";

function About() {
  return (
    <div className="about text-black w-100 px-10 py-16 md:py-[6vw] md:pb-[8vw] flex flex-col justify-center items-center">
      <div
        className="title relative text-4xl md:text-5xl 2xl:text-7xl font-semibold align-center
         mb-[3rem] md:mb-[5vw] drop-shadow-sm"
        data-aos="zoom-in-right"
        data-aos-duration="750"
        data-aos-once="true"
      >
        About
      </div>
      <div className="flex md:px-[16vw]">
        <div
          className="w-auto flex-1 md:flex items-center justify-end hidden mr-[7vw]"
          data-aos="zoom-in-right"
          data-aos-duration="750"
          data-aos-once="true"
        >
          <Img
            src="/profilenew.png"
            classes="relative h-[20vw] w-[20vw] overflow-hidden"
          />
        </div>
        <div className="md:w-1/2 md:pr-[15vw]">
          <div
            className="w-full flex flex-row justify-items-start items-center md:mb-[2vw]"
            data-aos="zoom-in-right"
            data-aos-duration="750"
            data-aos-once="true"
          >
            <Img
              src="/profile.jpeg"
              classes="relative md:hidden w-[16vw] h-[16vw] mr-4 rounded-full overflow-hidden"
            />
            <p className="text-[7vw] md:text-[3.5vw] text-theme w-[65vw] leading-none md:pr-[4vw] drop-shadow-sm">
              Do some awesome stuff with me!
            </p>
          </div>
          <p
            className="text-lg mt-5 md:text-[1.5vw] md:leading-[2vw] drop-shadow-sm"
            data-aos="zoom-in-right"
            data-aos-duration="750"
            data-aos-once="true"
          >
            Been working as a frontend developer for almost 2.5+ years, aiming
            to build highly scalable, efficient, well-documented websites so
            that it is easy to maintain. <br></br>
            <br></br>I love new ideas and am ready to accept challenges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
