import React, { useEffect, useState } from "react";
import { MenuAlt3Icon, XIcon } from "@heroicons/react/outline";
import Nav from "../Components/reusable/nav.jsx";

const nav = [1, 2, 3, 4, 5, 7];

function Intro(props) {
  const [menu, setMenu] = useState("0rem");

  const handleMenu = () => {
    if (menu == "12rem") setMenu("0rem");
    else setMenu("12rem");
    console.log(menu);
  };
  return (
    <div className="relative w-100 h-[30rem] md:h-[55vw] 2xl:h-[50vw]">
      <div
        className="w-full h-full bg-cover text-transparent bg-center"
        style={{
          backgroundImage: "url('/bg4.jpg')",
        }}
      ></div>
      <div
        className="flex flex-col w-full h-full p-5 md:p-0 absolute top-0 left-0 bg-gradient-to-b 
      from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,.1)]"
      >
        <div className="relative flex justify-end md:hidden cursor-pointer">
          <MenuAlt3Icon
            className="w-12 h-12 text-theme"
            onClick={() => handleMenu()}
          />
          <div
            className={`absolute w-40 h-auto right-0 bg-white overflow-hidden transition-all z-[200] rounded-sm`}
            style={{ width: `${menu}` }}
          >
            {nav.map((n, key) => {
              return <Nav section={key} key={key} handleMenu={handleMenu} />;
            })}
          </div>
        </div>
        <div
          className="nav w-100 h-20 py-[3.5vw] px-[4vw] text-white flex-row hidden md:flex 
        items-center justify-end space-x-[4vw]"
        >
          {nav.map((n, key) => {
            return <Nav section={key} key={key} handleMenu={handleMenu} />;
          })}
        </div>

        <div className="flex flex-col flex-[.8] h-[22rem] md:h-auto justify-center items-center drop-shadow-md">
          <div
            className="signature text-white z-20 mb-3 text-[15vw] md:text-[8vw] drop-shadow-md"
            data-aos="zoom-in-right"
            data-aos-duration="750"
            data-aos-once="true"
            style={{fontFamily:"Signature"}}
          >
            Sakib Chowdhury
          </div>
          <div
            className="job text-white p-2 md:p-[.3vw] md:px-[2vw] z-20 border-4 border-theme text-[7.5vw] md:text-[4vw] 
            w-[25rem]flex justify-center drop-shadow-md"
            data-aos="zoom-in-right"
            data-aos-duration="750"
            data-aos-delay="500"
            data-aos-once="true"
          >
            {" "}
            I&apos;m a
            <span className="text-theme drop-shadow-md">
              &nbsp;frontend&nbsp;
            </span>
            developer
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
