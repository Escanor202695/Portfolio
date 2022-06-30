import React,{useState} from "react";
import { MenuAlt3Icon } from "@heroicons/react/outline";

function Intro(props) {
  const [menu, setMenu]=useState('');
  return (
    <div className="relative">
      <div
        className="w-100 h-[30rem] md:h-[50rem] bg-cover text-transparent blur-[1px]"
        style={{ backgroundImage: "url('/introbg.jpg')" }}
      ></div>
      <div className="w-[100vw] h-[30rem] md:h-[50rem] p-5 md:p-0 absolute top-0 left-0 bg-gradient-to-b from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,.1)]">
        <div className="flex justify-end md:hidden cursor-pointer">
          <MenuAlt3Icon className="w-12 h-12 text-theme" />
        </div>
        <div className="nav w-100 h-20 py-8 px-10 text-white text-xl flex-row hidden md:flex items-center justify-end space-x-16">
          <div>Home</div>
          <div>About</div>
          <div>Skills</div>
          <div>Works</div>
          <div>Reviews</div>
          <div>Contact</div>
        </div>
        <div className="flex flex-col h-[22rem] md:h-[39rem] justify-center items-center ">
          <div className="signature text-white z-20 mb-3 md:mb-10 text-5xl md:text-[5rem]">
            Sakib Chowdhury
          </div>
          <div className="job text-white p-4 z-20 border-4 border-theme text-4xl md:text-6xl w-[25rem]flex justify-center ">
            {" "}
            Im a <span className="text-theme">&nbsp;frontend&nbsp;</span>{" "}
            developer
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
