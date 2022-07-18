import React, { useEffect, useState } from "react";
import ScrollIntoView from "react-scroll-into-view";
import {
  UserIcon,
  LightningBoltIcon,
  CodeIcon,
  PencilAltIcon,
  StarIcon,
  ChatIcon,
  SparklesIcon,
} from "@heroicons/react/outline";

const navList = [
  {
    section: "about",
    icon: (
      <UserIcon className="h6 w-6 md:h-[1.2vw] md:w-[1.2vw] stroke-[.1rem] md:stroke-[.17rem]" />
    ),
  },
  {
    section: "skills",
    icon: (
      <LightningBoltIcon className="h6 w-6 md:h-[1.2vw] md:w-[1.2vw] stroke-[.1rem] md:stroke-[.17rem]" />
    ),
  },
  {
    section: "works",
    icon: (
      <CodeIcon className="h6 w-6 md:h-[1.2vw] md:w-[1.2vw] stroke-[.1rem] md:stroke-[.17rem]" />
    ),
  },
  {
    section: "services",
    icon: (
      <PencilAltIcon className="h6 w-6 md:h-[1.2vw] md:w-[1.2vw] stroke-[.1rem] md:stroke-[.17rem]" />
    ),
  },
  {
    section: "feedbacks",
    icon: (
      <SparklesIcon className="h6 w-6 md:h-[1.2vw] md:w-[1.2vw] stroke-[.1rem] md:stroke-[.17rem]]" />
    ),
  },
  {
    section: "contacts",
    icon: (
      <ChatIcon className="h6 w-6 md:h-[1.2vw] md:w-[1.2vw] stroke-[.1rem] md:stroke-[.17rem]" />
    ),
  },
];

function nav({ section, handleMenu }) {
  const navItem = navList.filter((n, key) => key == section)[0];
  const border = navItem.section !== "contacts" ? "border-b-[1px]" : null;

  return (
    <ScrollIntoView selector={`.${navItem.section}`} smooth>
      <div
        onClick={() => handleMenu()}
        className={`flex p-3 md:p-0 mx-4 md:mx-0 ${border} text-black md:text-white items-center md:border-0 border-green-500 text-xl 
        md:text-[1.3vw] capitalize md:leading-[1.5vw] md:drop-shadow-md cursor-pointer`}
        data-aos="zoom-in-right"
        data-aos-duration="750"
        data-aos-once="true"
      >
        <div className="mr-2 md:mr-[.3vw] md:hidden xl:inline-block">
          {navItem.icon}
        </div>
        <div className="md:text-[1.2vw]">{navItem.section}</div>
      </div>
    </ScrollIntoView>
  );
}

export default nav;
