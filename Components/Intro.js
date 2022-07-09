import React, { useEffect, useState } from "react";
import { MenuAlt3Icon, XIcon } from "@heroicons/react/outline";
import Nav from "../Components/reusable/nav";

const mobileNav = [
  "about",
  "skills",
  "works",
  "services",
  "feedbacks",
  "contacts",
];

function Intro(props) {
  const [menu, setMenu] = useState("0rem");

  const handleMenu = () => {
    if (menu == "12rem") 
      setMenu("0rem");
    else setMenu("12rem");
    console.log(menu);
  };
  return (
    <div className="relative home">
      <div
        className="w-100 h-[30rem] md:h-[50rem] bg-cover text-transparent blur-[1px]"
        style={{ backgroundImage: "url('/introbg.jpg')" }}
      ></div>
      <div className="w-[100vw] h-[30rem] md:h-[50rem] p-5 md:p-0 absolute top-0 left-0 bg-gradient-to-b from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,.1)]">
        <div className="relative flex justify-end md:hidden cursor-pointer">
          <MenuAlt3Icon
            className="w-12 h-12 text-theme"
            onClick={() => handleMenu()}
          />
          <div
            className={`absolute w-40 h-auto right-0 bg-white overflow-hidden transition-all z-[200] rounded-sm`}
            style={{ width: `${menu}` }}
          >
            {mobileNav.map((n, key) => {
              return <Nav section={n} key={key} handleMenu={handleMenu} />;
            })}
          </div>
        </div>
        <div className="nav w-100 h-20 py-8 px-10 text-white text-xl flex-row hidden md:flex items-center justify-end space-x-16">
          <div>Home</div>
          <div>About</div>
          <div>Skills</div>
          <div>Works</div>
          <div>Reviews</div>
          <div>Contact</div>
        </div>
        <div className="flex flex-col h-[22rem] md:h-[39rem] justify-center items-center">
          <div className="signature text-white z-20 mb-3 md:mb-10 text-[10vw] md:text-[5rem]">
            Sakib Chowdhury
          </div>
          <div className="job text-white p-2 z-20 border-4 border-theme text-[7.5vw] md:text-6xl w-[25rem]flex justify-center ">
            {" "}
            I&apos;m a <span className="text-theme">
              &nbsp;frontend&nbsp;
            </span>{" "}
            developer
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
