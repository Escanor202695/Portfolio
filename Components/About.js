import React from "react";
import Img from "../Components/reusable/Img";

function About() {
  return (
    <div className="about text-black w-100 px-10 py-16 md:py-[6vw] md:pb-[8vw] flex flex-col justify-center items-center">
      <div
        className="title relative text-4xl md:text-5xl 2xl:text-7xl font-semibold align-center
         mb-[3rem] md:mb-[5vw] drop-shadow-md"
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
            src="/profilenew.webp"
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
              src="/profile.webp"
              classes="relative md:hidden w-[16vw] h-[16vw] mr-4 rounded-full overflow-hidden"
            />
            <p className="text-[7vw] md:text-[3.5vw] text-theme w-[65vw] leading-none md:pr-[4vw] drop-shadow-sm">
              Do some awesome stuff with me!
            </p>
          </div>
          <p
            className="text-lg mt-5 md:text-[1.3vw] md:leading-[2vw] drop-shadow-sm"
            data-aos="zoom-in-right"
            data-aos-duration="750"
            data-aos-once="true"
          >
            In the realm of frontend, I&rsquo;ve journeyed for over <span className="border-[#26514F] text-2xl bg-gradient-to-r from-[#63e352] to-[#1e825d] text-transparent bg-clip-text">3.5 years</span>,
            crafting websites that seamlessly weave scalability, efficiency, and
            meticulous documentation.
            <br />
            <br />
            And here&rsquo;s the spellbinding twist – I&rsquo;m not just a
            developer; I&rsquo;m a digital sorcerer, casting code to create
            wonders. Fueled by curiosity and unafraid of challenges, I&rsquo;m
            here to shape your digital dreams into awe-inspiring realities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
