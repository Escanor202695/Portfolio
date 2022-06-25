import React from "react";
import Image from "next/image";

function About(props) {
  return (
    <div className="text-black w-100 px-10 py-16 flex flex-col justify-center items-center">
      <div
        className="title relative text-4xl font-semibold align-center mb-[3rem] md:mb-20"
        data-aos="zoom-in-right"
        data-aos-duration="750"
      >
        About
      </div>
      <div
        className="flex flex-row justify-items-start items-center"
        data-aos-delay="300"
        data-aos="zoom-in-right"
        data-aos-duration="750"
      >
        <div className="relative w-[5rem] h-[5rem] rounded-full mr-5 overflow-hidden">
          <Image
            src="/profile.jpeg"
            alt=""
            width={20}
            layout="fill"
            blur="true"
          />
        </div>
        <p className="text-3xl text-theme w-3/5 sm:w-6/7">
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
