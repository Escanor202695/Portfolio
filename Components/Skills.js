import React from "react";
import Img  from "../Components/reusable/Img";
import Skill from "../Components/reusable/Skill.js";

function Skills(props) {
  return (
    <div className="w-100 flex flex-col items-center relative overflow-hidden text-white">
      <Img src="/skill-bg.jpg" classes="w-[40rem] h-[50rem] absolute top-0 left-0"/>

      <div className="w-[100vw] h-full absolute bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,.5)]"></div>

      <div
        className="title relative mt-16 text-4xl font-semibold align-center mb-[3rem] md:mb-20"
        data-aos="zoom-in-right"
        data-aos-duration="750"
        data-aos-once="true"
      >
        Skills
      </div>
      <Skill title="html/css" score="90" />
      <Skill title="html/css" score="70" />
      <Skill title="html/css" score="75" />
      <Skill title="html/css" score="50" />
      <Skill title="html/css" score="60" />
      <Skill title="html/css" score="90" />
      <div className="mb-16"></div>
    </div>
  );
}

export default Skills;
