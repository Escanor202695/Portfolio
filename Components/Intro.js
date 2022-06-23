import React from "react";
import { MenuAlt3Icon } from "@heroicons/react/outline";

function Intro(props) {
  return (
    <div
      className="w-100 h-[40rem] md:h-96 relative bg-white bg-cover"
      style={{ backgroundImage: "url('/introbg.jpg')" }}
    >
    
      <div className="w-100 h-screen p-5 md:p-0 bg-gradient-to-b from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.05)]">
        <div className="flex justify-end md:hidden">
          <MenuAlt3Icon className="w-12 h-12 text-theme" />
        </div>
        <div className="w-100 h-10 py-8 px-10 text-white text-xl flex-row hidden md:flex justify-end space-x-14 sm:inline-block">
          <div className=" text-red-200">Home</div>
          <div>About</div>
          <div>Skills</div>
          <div>Works</div>
          <div>Reviews</div>
          <div>Contact</div>
        </div>
        <div className="title">
          <div className="signature text-white text-6xl z-20">
            Sakib Chowdhury
          </div>
          <div className="job text-white z-20 text-5xl">
            {" "}
            Im a <span className="animate-ping text-green-400">
              frontend{" "}
            </span>{" "}
            developer
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
