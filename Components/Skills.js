import React from "react";
import Skill from "../Components/reusable/Skill.js";
import Img from "../Components/reusable/Img";

function Skills(props) {
  return (
    <div className="skills w-100 flex flex-col items-center relative overflow-hidden text-white 
    bg-gradient-to-tr to-[#62ddd7] from-[#111414]">
      <div className="absolute h-full w-full top-0 left-0">
        <Img src="/abstractbg.webp" classes="hidden md:flex relative w-full h-full opacity-70"/>
        <Img src="/abstractbgmobile.webp" classes="md:hidden relative w-full h-full z-[100]"/>
      </div>
      <div className="w-[100vw] h-full absolute bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,.4)]"></div>
      <div
        className="title relative my-16 md:mt-[6vw] text-4xl md:text-5xl 2xl:text-6xl 
        font-semibold align-center mb-[3rem] md:mb-[4.5vw] drop-shadow-md shadow-white"
        data-aos="zoom-in-right"
        data-aos-duration="750"
        data-aos-once="true"
      >
        Skills
      </div>
      <div className="flex flex-col md:flex-row md:mb-[3vw] px-[5vw] w-full justify-center">
        <div className="yo flex-[.45]">
          <Skill title="Html - CSS" score="90" />
          <Skill title="JavaScript / TypeScript" score="85" />
          <Skill title="React / Next.js" score="90" />
          <Skill title="Redux" score="85" />
        </div>
        <div className="flex-[.45]">
          <Skill title="Bootstrap / Tailwind Css" score="90" />
          <Skill title="Material UI / Antd pro" score="85" />
          <Skill title="Git / Github" score="80" />
          <Skill title="Figma / Adobe XD / Adobe AI" score="75" />
        </div>
      </div>
      <div className="mb-12 md:mb-[3vw]"></div>
    </div>
  );
}

export default Skills;
